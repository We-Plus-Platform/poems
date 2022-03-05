package com.example.poems.serviceImpl;

import com.example.poems.bean.PersonalInfo;
import com.example.poems.bean.Result;
import com.example.poems.bean.User;
import com.example.poems.dao.UserDao;
import com.example.poems.service.UserService;
import com.example.poems.utils.Decode;
import com.example.poems.utils.Encode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserDao userDao;

    @Override
    public Result login(User user, HttpServletRequest request, HttpServletResponse response) throws Exception{
        Result result = new Result();
        PersonalInfo personalInfo = userDao.findNameAndSexBySchoolNum(user.getSchoolNum());
        if(personalInfo != null) {
            if (personalInfo.getName().equals(user.getName())) {
//            if(userDao.findNameBySchoolNum(user.getSchoolNum()).length() == 0) {
//                Cookie cookie = new Cookie("akpjefdg", user.getSchoolNum());
////              cookie.setMaxAge(60 * 60 * 24 * 7);
//                cookie.setMaxAge(60);
//                response.addCookie(cookie);
//
//                userDao.writeRegisterIntoUser(user.getName(), user.getSchoolNum(),
//                        personalInfo.getSex(), 0, 0, 0);
//            }
////////////////////////////////

                String name = userDao.findNameBySchoolNum(user.getSchoolNum());
                if (name == null || name.equals("") || name.length() == 0) {
                    userDao.writeRegisterIntoUser(user.getName(), user.getSchoolNum(),
                            personalInfo.getSex(), 0, 0, 0, 0,personalInfo.getSchool());
                }
                Cookie cookie = new Cookie("akpjefdg", Encode.encode(user.getSchoolNum()));
//              cookie.setMaxAge(60 * 60 * 24 * 7);
                cookie.setMaxAge(60 * 60 * 24 * 10);
                response.addCookie(cookie);
//////////////////////////
                result.setStatus(200);
                result.setInfo("success");
            }else {
                result.setStatus(500);
                result.setInfo("fail");
            }
        }else {
            result.setStatus(500);
            result.setInfo("fail");
        }

        return result;
    }

    @Override
    public Result logCheck(HttpServletRequest request, HttpServletResponse response) {
        Result result = new Result();
        Cookie[] cookies = request.getCookies();
        if(cookies != null) {
            for (Cookie c : cookies) {
                if(c.getName().equals("akpjefdg")){
                    result.setStatus(200);
                    result.setInfo("success");
                    return result;
                }
            }
        }
        result.setStatus(500);
        result.setInfo("fail");
        return result;
    }

}
