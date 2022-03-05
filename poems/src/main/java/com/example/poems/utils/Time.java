package com.example.poems.utils;


import java.text.SimpleDateFormat;
import java.util.Date;

public class Time {
    public static void main(String[] args) {
        Date date = new Date();
        String t = new SimpleDateFormat("ddHH").format(date);
//        dd = "0100";
        System.out.println(Integer.parseInt(t));

    }
}
