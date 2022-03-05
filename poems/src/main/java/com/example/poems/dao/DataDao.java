package com.example.poems.dao;

import com.example.poems.bean.PersonalInfo;
import com.example.poems.bean.RankBean;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface DataDao {
    @Select("select name,lastSubmit,totalGrade,sex,school from user where schoolNum=#{schoolNum}")
    PersonalInfo getInfo(String schoolNum);

    @Select("select schoolNum from user order by totalGrade desc")
    String[] getAll();

    @Select("select name,totalGrade,sex,school from user order by totalGrade desc")
    RankBean[] findRanks();
}
