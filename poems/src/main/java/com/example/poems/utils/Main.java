package com.example.poems.utils;

import com.example.poems.bean.Submit;

import java.io.UnsupportedEncodingException;
import java.util.HashSet;

public class Main {
    public static void main(String[] args) throws UnsupportedEncodingException {
//        Submit submit = new Submit();
//        String[] chooseAnswer = new String[]{"a", "b"};
//        String[] fillAnswer = new String[]{"a", "b"};
//        String[] judgeAnswer = new String[]{"a", "b"};
//
//        int[] number = new int[]{1, 2};
//        submit.setChoose(chooseAnswer);
//        submit.setFill(fillAnswer);
//        submit.setJudge(judgeAnswer);
//        submit.setNumber(number);
//        int cnt1 = 0, cnt2 = 0, cnt3 = 0, a;
//for(int i = 0; i < 100; i++) {
//    a = (int) (Math.random() * (4 - 1) + 1) - 1;
//    System.out.println(a);
//    if(a == 0)
//        cnt1++;
//    else if(a==1)
//        cnt2++;
//    else if(a==2)
//        cnt3++;

        String en = Encode.encode("2019213329");
        System.out.println(en);

        String de = Decode.decode(en);
        System.out.println(de);

        en = Encode.encode("2019212444");
        System.out.println(en);

        de = Decode.decode(en);
        System.out.println(de);

}
//        System.out.println(cnt1 + "," + cnt2 + "," + cnt3);

    }

