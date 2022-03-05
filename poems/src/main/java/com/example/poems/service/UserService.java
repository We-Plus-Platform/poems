package com.example.poems.service;

import com.example.poems.bean.Result;
import com.example.poems.bean.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface UserService {
    Result login(User user, HttpServletRequest request, HttpServletResponse response) throws Exception;
    Result logCheck(HttpServletRequest request, HttpServletResponse response);
}
