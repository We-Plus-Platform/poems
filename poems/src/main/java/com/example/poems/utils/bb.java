package com.example.poems.utils;

public class bb extends Thread{
    public long start;
    public long end;
    public long num=0;
    public bb(long start, long end) {
        super();
        this.start = start;
        this.end = end;
    }

    int isPerfect(int n)
    {
        int lyy_sum = 0;
        for(int i = 1; i <= n / 2; i++)
            if(n % i == 0)
                lyy_sum += i;//统计所有真因子的和。
        if(lyy_sum == n)
            return 1;//如果与原值相等，则该数为完数。
        return 0;//不是完数。
    }

    //串行算法
    public long num() {
        for(long i = start; i <= end; i++)
            num += isPerfect((int)i);
        return num;
    }
    //实现run()
    public void run(){
        for(long i = start; i <= end; i += 2) {
            num = num + isPerfect((int)i);
        }
    }
    //得到线程的最终结果
    public long getNum(){
        return num;
    }

}



