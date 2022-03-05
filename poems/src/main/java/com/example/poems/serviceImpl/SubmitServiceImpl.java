package com.example.poems.serviceImpl;

import com.example.poems.bean.GradeResult;
import com.example.poems.bean.Result;
import com.example.poems.bean.Submit;
import com.example.poems.dao.SubmitDao;
import com.example.poems.service.SubmitService;
import com.example.poems.utils.Decode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;

@Slf4j
@Service
public class SubmitServiceImpl implements SubmitService {
    @Autowired
    SubmitDao submitDao;

    @Override
    public GradeResult submit(Submit submit, HttpServletRequest request) {
        GradeResult gradeResult = new GradeResult();
        Result result = new Result();

        String[] types = {"country", "social", "personal"};

        int index = 0;

        for (String t : types){
            if(t.equals(submit.getType())){
                break;
            }
            index++;
        }

        String schoolNum = "";
        Cookie[] cookies = request.getCookies();
        if(cookies != null) {
            for (Cookie c : cookies) {
                if (c.getName().equals("akpjefdg")) {
                    schoolNum = c.getValue();
                    break;
                }
            }
        } else {
            gradeResult.setStatus(500);
            gradeResult.setInfo("fail");
            return gradeResult;
        }
        schoolNum = Decode.decode(schoolNum);

        Date date = new Date();
        String dd = new SimpleDateFormat("dd").format(date);
        int today = Integer.parseInt(dd);
        if((today - submitDao.findToday(schoolNum)) == 0){
            gradeResult.setStatus(500);
            gradeResult.setInfo("fail");
            return gradeResult;
        }

        String answer;
        int i, grade = 0;

        switch (index) {
            case 0:
                for (i = 0; i < 7; i++) {
                    answer = submitDao.findCountryChooseAnswerById(submit.getNumber()[i]).replace("\n", "");
                    //            System.out.println(answer + "," + submit.getChoose()[i]);
                    if (answer.equals(submit.getChoose()[i])) {
                        grade += 10;
                    }
                }
                for (i = 0; i < 3; i++) {
//                    System.out.println((submit.getNumber()[i + 7]));
                    answer = submitDao.findCountryFillAnswerById(submit.getNumber()[i + 7]).replace("\n", "");
//                    System.out.println(answer);
                    //            System.out.println(answer + "," + submit.getFill()[i]);
                    if (answer.equals(submit.getFill()[i])) {
                        grade += 10;
                    }
//                    System.out.println();
                }
                break;

            case 1:
                for (i = 0; i < 7; i++) {
                    answer = submitDao.findSocialChooseAnswerById(submit.getNumber()[i]).replace("\n", "");
//            System.out.println(answer + "," + submit.getChoose()[i]);
                    if (answer.equals(submit.getChoose()[i])) {
                        grade += 10;
                    }
                }

                for (i = 0; i < 3; i++) {
                    answer = submitDao.findSocialFillAnswerById(submit.getNumber()[i + 7]).replace("\n", "");
//            System.out.println(answer + "," + submit.getFill()[i]);
                    if (answer.equals(submit.getFill()[i])) {
                        grade += 10;
                    }
//                    System.out.println();
                }
                break;

            case 2:
                for (i = 0; i < 7; i++) {
                    answer = submitDao.findPersonalChooseAnswerById(submit.getNumber()[i]).replace("\n", "");
//            System.out.println(answer + "," + submit.getChoose()[i]);
                    if (answer.equals(submit.getChoose()[i])) {
                        grade += 10;
                    }
                }

                for (i = 0; i < 3; i++) {
                    answer = submitDao.findPersonalFillAnswerById(submit.getNumber()[i + 7]).replace("\n", "");
//            System.out.println(answer + "," + submit.getFill()[i]);
                    if (answer.equals(submit.getFill()[i])) {
                        grade += 10;
                    }
//                    System.out.println();
                }
                break;
        }

        String hh = new SimpleDateFormat("HH:mm").format(date);
//        submitDao.updateLastSubmit(dd, schoolNum);

        submitDao.updateLastGrade(grade, schoolNum);
        submitDao.updateTotalSubmit(schoolNum);
        submitDao.updateTotalGrade(grade, schoolNum);

        gradeResult.setGrade(grade);
        gradeResult.setStatus(200);
        gradeResult.setInfo("success");

        log.info("submit: {}, {}", hh, schoolNum+submit.toString());
        log.info("grade: {}", grade);
        submitDao.updateToday(today, schoolNum);

        return gradeResult;
    }

    @Override
    public GradeResult getGrade(HttpServletRequest request) {
        GradeResult gradeResult = new GradeResult();
        Cookie[] cookies = request.getCookies();
        if(cookies != null) {
            for (Cookie c : cookies) {
                if (c.getName().equals("akpjefdg")) {
                    gradeResult.setGrade(submitDao.findLastGradeBySchoolNum(c.getValue()));
                    break;
                }
            }
        } else {
            gradeResult.setStatus(500);
            gradeResult.setInfo("fail");
            return gradeResult;
        }

        gradeResult.setStatus(200);
        gradeResult.setInfo("success");
        return gradeResult;
    }


}
