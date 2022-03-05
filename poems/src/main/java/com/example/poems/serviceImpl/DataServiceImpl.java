package com.example.poems.serviceImpl;

import com.example.poems.bean.PersonalInfo;
import com.example.poems.bean.PersonalInfoResult;
import com.example.poems.bean.RankBean;
import com.example.poems.bean.Ranks;
import com.example.poems.dao.DataDao;
import com.example.poems.service.DataService;
import com.example.poems.utils.Decode;
import com.example.poems.utils.Encode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;

@Slf4j
@Service
public class DataServiceImpl implements DataService {

    @Autowired
    DataDao dataDao;
    @Override
    public PersonalInfoResult getInfo(HttpServletRequest request) {


        PersonalInfoResult personalInfoResult = new PersonalInfoResult();
        PersonalInfo personalInfo = new PersonalInfo();
        int rank = 999, count = 0;
        String schoolNum = null;
        Cookie[] cookies = request.getCookies();
        if(cookies != null) {
            for (Cookie c : cookies) {
                if (c.getName().equals("akpjefdg")) {
                    schoolNum = c.getValue();
                }
            }
        } else {
            personalInfoResult.setStatus(500);
            personalInfoResult.setInfo("fail");

            return personalInfoResult;
        }

        schoolNum = Decode.decode(schoolNum);


        personalInfo = dataDao.getInfo(schoolNum);

        personalInfo.setSchoolNum(schoolNum);

        String[] schoolNums = dataDao.getAll();
        for(String s : schoolNums){
            count++;
            if(s.equals(schoolNum)){
                rank = count;
            }
        }


        Date date = new Date();
        String dd = new SimpleDateFormat("dd").format(date);

        personalInfo.setEverydayLimit(0);

        if(!(dd.equals(personalInfo.getLastSubmit()))) {
            personalInfo.setEverydayLimit(1);
        }

//        String t = new SimpleDateFormat("ddHH").format(date);
//        if(Integer.parseInt(t) >= 100){ //5月1日00点
//            personalInfo.setEverydayLimit(0);
//        }

        personalInfo.setRank(rank);

        personalInfoResult.setPersonalInfo(personalInfo);
        personalInfoResult.setStatus(200);
        personalInfoResult.setInfo("success");

        log.info("user: {}, {}", schoolNum, personalInfo.getName());

        return personalInfoResult;
    }

    @Override
    public Ranks getRanks() {
        int count = 0;
        Ranks ranks = new Ranks();

        RankBean[] rankBeans = dataDao.findRanks();

        for(RankBean r : rankBeans){
            count++;
            r.setRank(count);
        }

        ranks.setRankBeans(rankBeans);
        ranks.setStatus(200);
        ranks.setInfo("success");
        return ranks;
    }
}
