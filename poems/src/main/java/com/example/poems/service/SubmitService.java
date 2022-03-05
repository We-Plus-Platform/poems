package com.example.poems.service;

import com.example.poems.bean.GradeResult;
import com.example.poems.bean.Submit;

import javax.servlet.http.HttpServletRequest;

public interface SubmitService {
    GradeResult submit(Submit submit, HttpServletRequest request);
    GradeResult getGrade(HttpServletRequest request);
}
