package com.example.poems.utils;

import java.io.UnsupportedEncodingException;
import java.util.Base64;

public class Base1 {
    public static void main(String[] args) throws UnsupportedEncodingException {
//        String base64en= Base64.getEncoder().encodeToString("2019212444".getBytes("utf-8"));
//        System.out.println("Base64 编码字符串 (基本) :" + base64en);
//
//        byte[] base64decodedBytes = Base64.getDecoder().decode(base64en);
//        System.out.println("原始字符串: " + new String(base64decodedBytes, "utf-8"));

        String schoolNum = "2019212444";
        String encode = Base64.getEncoder().encodeToString(schoolNum.getBytes("utf-8"));
        String encode2 = Base64.getEncoder().encodeToString(encode.getBytes("utf-8"));
        System.out.println(encode2);

        byte[] decode2 = Base64.getDecoder().decode(encode2);
        byte[] decode = Base64.getDecoder().decode(decode2);
        System.out.println(new String(decode, "utf-8"));
    }
}
