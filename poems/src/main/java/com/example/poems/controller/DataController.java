package com.example.poems.controller;

import com.example.poems.bean.PersonalInfoResult;
import com.example.poems.bean.Ranks;
import com.example.poems.service.DataService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@RestController
public class DataController {
    @Resource
    DataService dataService;
    @GetMapping("/getRanks")
    Ranks getRanks(){
        return dataService.getRanks();
    }

    @GetMapping("/getInfo")
    PersonalInfoResult getInfo(HttpServletRequest request){
        return dataService.getInfo(request);
    }
}
