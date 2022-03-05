package com.example.poems.controller;

import com.example.poems.bean.GradeResult;
import com.example.poems.bean.Submit;
import com.example.poems.service.SubmitService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@RestController
public class SubmitController {
    @Resource
    SubmitService submitService;

    @PostMapping("/submit")
    GradeResult submit(@RequestBody Submit submit, HttpServletRequest request){
        return submitService.submit(submit, request);
    }

    @GetMapping("/getGrade")
    GradeResult getGrade(HttpServletRequest request){
        return submitService.getGrade(request);
    }
}
