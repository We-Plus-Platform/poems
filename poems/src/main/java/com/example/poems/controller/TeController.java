package com.example.poems.controller;

import com.example.poems.bean.Question;
import com.example.poems.service.TeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@RestController
public class TeController {

    @Resource
    TeService teService;
    @GetMapping("/getQuestion")
    Question getQuestion(HttpServletRequest request){
        return teService.getQuestion(request);
    }
}
