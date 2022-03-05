package com.example.poems.dao;

import com.example.poems.bean.Choose;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface TeDao {

    @Select("select title,optionA,optionB,optionC,optionD from countryChoose where id=#{id}")
    Choose getCountryChoose(int id);
    @Select("select title from countryFill where id=#{id}")
    String getCountryFill(int id);

    @Select("select title,optionA,optionB,optionC,optionD from socialChoose where id=#{id}")
    Choose getSocialChoose(int id);
    @Select("select title from socialFill where id=#{id}")
    String getSocialFill(int id);

    @Select("select title,optionA,optionB,optionC,optionD from personalChoose where id=#{id}")
    Choose getPersonalChoose(int id);
    @Select("select title from personalFill where id=#{id}")
    String getPersonalFill(int id);

    @Update("update user set lastSubmit=#{lastSubmit} where schoolNum=#{schoolNum};")
    void updateLastSubmit(String lastSubmit, String schoolNum);
}
