package com.example.poems.service;

import com.example.poems.bean.PersonalInfoResult;
import com.example.poems.bean.Ranks;

import javax.servlet.http.HttpServletRequest;

public interface DataService {
    PersonalInfoResult getInfo(HttpServletRequest request);
    Ranks getRanks();
}
