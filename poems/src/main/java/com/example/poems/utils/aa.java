package com.example.poems.utils;

public class aa {
    public static void main(String[] args) throws Exception{
        bb t1 = new bb(1, 100000);
        bb t2 = new bb(2, 100000);
        long startTime = System.currentTimeMillis();
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        long endTime = System.currentTimeMillis();
        System.out.println("并行结果=" + (t1.getNum() + t2.getNum()));
        System.out.println("并行时间=" + (endTime - startTime));

        startTime = System.currentTimeMillis();
        bb serial = new bb(1, 100000);
        long num = serial.num();
        endTime = System.currentTimeMillis();
        System.out.println("串行结果=" + num);
        System.out.println("串行时间=" + (endTime - startTime));
    }
}
