package com.example.poems.utils;

import java.util.Base64;

public class Decode {
    public static String decode(String encode){
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

//        System.out.println("de:" + String.valueOf(en));

        byte[] decode2 = Base64.getDecoder().decode(String.valueOf(en));
        byte[] decode = Base64.getDecoder().decode(decode2);

        String last = new String(decode);
        return last;
    }

    public static void main(String[] args) {
        Decode.decode("TWpDkK8HSXuNke12T1K8PQ==");
    }

}
