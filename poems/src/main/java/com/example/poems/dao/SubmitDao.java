package com.example.poems.dao;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface SubmitDao {
    @Update("update user set lastGrade=#{lastGrade} where schoolNum=#{schoolNum};")
    void updateLastGrade(int lastGrade, String schoolNum);

    @Select("select answer from countryChoose where id=#{id}")
    String findCountryChooseAnswerById(int id);
    @Select("select answer from countryFill where id=#{id}")
    String findCountryFillAnswerById(int id);

    @Select("select answer from socialChoose where id=#{id}")
    String findSocialChooseAnswerById(int id);
    @Select("select answer from socialFill where id=#{id}")
    String findSocialFillAnswerById(int id);

    @Select("select answer from personalChoose where id=#{id}")
    String findPersonalChooseAnswerById(int id);
    @Select("select answer from personalFill where id=#{id}")
    String findPersonalFillAnswerById(int id);




    @Select("select lastGrade from user where schoolNum=#{schoolNum}")
    int findLastGradeBySchoolNum(String schoolNum);

    @Update("update user set lastSubmit=#{lastSubmit} where schoolNum=#{schoolNum};")
    void updateLastSubmit(String lastSubmit, String schoolNum);

    @Update("update user set totalSubmit=totalSubmit+1 where schoolNum=#{schoolNum}")
    void updateTotalSubmit(String schoolNum);

    @Update("update user set totalGrade=totalGrade+#{grade} where schoolNum=#{schoolNum}")
    void updateTotalGrade(int grade, String schoolNum);

    @Select("select lastSubmit from user where schoolNum=#{schoolNum}")
    String findLastSubmit(String schoolNum);

    @Update("update user set today=#{today} where schoolNum=#{schoolNum}")
    void updateToday(int today, String schoolNum);
    @Select("select today from user where schoolNum=#{schoolNum}")
    int findToday(String schoolNum);
}
