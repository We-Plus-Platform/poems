package com.example.poems.dao;

import com.example.poems.bean.PersonalInfo;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserDao {
    @Select("select name,sex,school from students where schoolNum=#{schoolNum}")
    PersonalInfo findNameAndSexBySchoolNum(String schoolNum);

    @Insert("insert into user(name,schoolNum,sex,lastSubmit,lastGrade,totalGrade,totalSubmit,school) " +
            "values(#{name},#{schoolNum},#{sex},#{lastSubmit},#{lastGrade},#{totalGrade},#{totalSubmit},#{school})")
    void writeRegisterIntoUser(String name, String schoolNum, String sex,
                               int lastSubmit, int lastGrade, int totalGrade, int totalSubmit, String school);

    @Select("select name from user where schoolNum=#{schoolNum}")
    String findNameBySchoolNum(String schoolNum);

}
