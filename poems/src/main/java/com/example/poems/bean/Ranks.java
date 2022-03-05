package com.example.poems.bean;

public class Ranks extends Result{
    RankBean[] rankBeans;

    @Override
    public String getInfo() {
        return super.getInfo();
    }

    @Override
    public void setInfo(String info) {
        super.setInfo(info);
    }

    @Override
    public int getStatus() {
        return super.getStatus();
    }

    @Override
    public void setStatus(int status) {
        super.setStatus(status);
    }

    public RankBean[] getRankBeans() {
        return rankBeans;
    }

    public void setRankBeans(RankBean[] rankBeans) {
        this.rankBeans = rankBeans;
    }
}
