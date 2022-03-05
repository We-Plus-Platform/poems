package com.example.poems.serviceImpl;

import com.example.poems.bean.Choose;
import com.example.poems.bean.Question;
import com.example.poems.dao.TeDao;
import com.example.poems.service.TeService;
import com.example.poems.utils.Decode;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;

@Slf4j
@Service
public class TeServiceImpl implements TeService {
@Autowired
    TeDao teDao;

    @Override
    public Question getQuestion(HttpServletRequest request) {
        Question question = new Question();
        Date date = new Date();
        String dd = new SimpleDateFormat("dd").format(date);
        String yy = new SimpleDateFormat("HH:mm").format(date);

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
            question.setStatus(500);
            question.setInfo("fail");
            return question;
        }
        schoolNum = Decode.decode(schoolNum);

        String[] types = {"country", "social", "personal"};

        int which = (int) (Math.random() * (4 - 1) + 1) - 1;
        String type = types[which];
        question.setType(type);

        int id1, id2, i, cnt = 0;
        HashSet<Integer> hashSet1 = new HashSet<>();
        HashSet<Integer> hashSet2 = new HashSet<>();

        Choose choose;
        ArrayList<Choose> allChoose = new ArrayList<>();

        String fill = "";
        ArrayList<String> allFill = new ArrayList<>();
        int[] number = new int[10];

        switch (which) {
            case 0:
                for (i = 0; i < 7; i++) {
                    do {
                        id1 = (int) (Math.random() * (26 - 1) + 1);
                        hashSet1.add(id1);
                    } while (hashSet1.size() != i + 1);
                    number[i] = id1;
                    choose = teDao.getCountryChoose(id1);
                    allChoose.add(choose);
                }
                for (i = 0; i < 3; i++) {
                    do {
                        id2 = (int) (Math.random() * (11 - 1) + 1);
                        hashSet2.add(id2);
                    } while (hashSet2.size() != i + 1);
                    number[i + 7] = id2;
                    fill = teDao.getCountryFill(id2);
                    allFill.add(fill);
                }
                break;

            case 1:
                for (i = 0; i < 7; i++) {
                    do {
                        id1 = (int) (Math.random() * (23 - 1) + 1);
                        hashSet1.add(id1);
                    } while (hashSet1.size() != i + 1);
                    number[i] = id1;
                    choose = teDao.getSocialChoose(id1);
                    allChoose.add(choose);
                }
                for (i = 0; i < 3; i++) {
                    do {
                        id2 = (int) (Math.random() * (19 - 1) + 1);
                        hashSet2.add(id2);
                    } while (hashSet2.size() != i + 1);
                    number[i + 7] = id2;
                    fill = teDao.getSocialFill(id2);
                    allFill.add(fill);
                }
                break;

            case 2:
                for (i = 0; i < 7; i++) {
                    do {
                        id1 = (int) (Math.random() * (29 - 1) + 1);
                        hashSet1.add(id1);
                    } while (hashSet1.size() != i + 1);
                    number[i] = id1;
                    choose = teDao.getPersonalChoose(id1);
                    allChoose.add(choose);
                }
                for (i = 0; i < 3; i++) {
                    do {
                        id2 = (int) (Math.random() * (11 - 1) + 1);
                        hashSet2.add(id2);
                    } while (hashSet2.size() != i + 1);
                    number[i + 7] = id2;
                    fill = teDao.getPersonalFill(id2);
                    allFill.add(fill);
                }
                break;
        }


        question.setChoose(new Choose[]{allChoose.get(0),allChoose.get(1),allChoose.get(2),
                allChoose.get(3),allChoose.get(4),allChoose.get(5),allChoose.get(6)});
        question.setFill(new String[]{allFill.get(0),allFill.get(1),allFill.get(2)});
        question.setNumber(number);

        question.setStatus(200);
        question.setInfo("success");
//        @Update("update user set lastSubmit=#{lastSubmit} where schoolNum=#{schoolNum};")
//        void updateLastSubmit(String lastSubmit, String schoolNum);

        log.info("question: {}, {}", yy, schoolNum + question.toString());
        teDao.updateLastSubmit(dd, schoolNum);

        return question;
    }
}
