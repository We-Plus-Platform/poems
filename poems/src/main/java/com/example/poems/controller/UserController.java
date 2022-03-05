package com.example.poems.controller;

import com.example.poems.bean.*;
import com.example.poems.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
public class UserController {
    @Resource
    UserService userService;

    @PostMapping("/login")
    Result login(@RequestBody User user, HttpServletRequest request, HttpServletResponse response) throws Exception {
        return userService.login(user, request, response);
    }

    @GetMapping("/logCheck")
    Result logCheck(HttpServletRequest request, HttpServletResponse response){
        return userService.logCheck(request, response);
    }

}
