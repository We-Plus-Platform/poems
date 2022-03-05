package com.example.poems.service;

import com.example.poems.bean.Question;

import javax.servlet.http.HttpServletRequest;

public interface TeService {

    Question getQuestion(HttpServletRequest request);
}
