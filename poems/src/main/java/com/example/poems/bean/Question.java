package com.example.poems.bean;

import java.util.Arrays;

public class Question extends Result{
    private String type;
    private Choose[] choose;
    private String[] fill;
    private int[] number;

    @Override
    public String toString() {
        return "Question{" +
                "type='" + type + '\'' +
                ", choose=" + Arrays.toString(choose) +
                ", fill=" + Arrays.toString(fill) +
                ", number=" + Arrays.toString(number) +
                '}';
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String[] getFill() {
        return fill;
    }

    public void setFill(String[] fill) {
        this.fill = fill;
    }

    public Choose[] getChoose() {
        return choose;
    }

    public void setChoose(Choose[] choose) {
        this.choose = choose;
    }

    @Override
    public int getStatus() {
        return super.getStatus();
    }

    @Override
    public void setStatus(int status) {
        super.setStatus(status);
    }

    @Override
    public String getInfo() {
        return super.getInfo();
    }

    @Override
    public void setInfo(String info) {
        super.setInfo(info);
    }

    public int[] getNumber() {
        return number;
    }

    public void setNumber(int[] number) {
        this.number = number;
    }
}
