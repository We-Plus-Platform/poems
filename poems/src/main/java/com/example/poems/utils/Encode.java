package com.example.poems.utils;

import java.io.UnsupportedEncodingException;
import java.util.Base64;

public class Encode {
    public static String encode(String schoolNum) throws UnsupportedEncodingException {
        String encode2 = Base64.getEncoder().encodeToString(schoolNum.getBytes("utf-8"));
        String encode = Base64.getEncoder().encodeToString(encode2.getBytes("utf-8"));
//        System.out.println(encode);
        char[][] ip = {
                {'A', 'C'}, {'a', 'c'}, {'C', 'A'}, {'c', 'a'},
                {'B', 'D'}, {'b', 'd'}, {'D', 'B'}, {'d', 'b'},
                {'E', 'K'}, {'e', 'k'}, {'K', 'E'}, {'k', 'e'},
                {'H', 'U'}, {'h', 'u'}, {'U', 'H'}, {'u', 'h'},
                {'J', 'R'}, {'j', 'r'}, {'R', 'J'}, {'r', 'j'},
                {'9', '8'}, {'8', '9'},
                {'5', '2'}, {'2', '5'},
                {'3', '7'}, {'7', '3'},
                {'1', '0'}, {'0', '1'}
        };
int index = 0;
        char[] en = encode.toCharArray();
        for(char c : en){
            for (char[] cc : ip){
                if(c == cc[0]){
                    en[index] = cc[1];
                }
            }
            index++;
        }

        String last = new String(en);
return last;
    }

    public static void main(String[] args) throws UnsupportedEncodingException {
        System.out.println(Encode.encode("2019212444"));
    }
}
