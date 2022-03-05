package com.example.poems.bean;

import java.util.Arrays;

public class Submit {
    private String type;
    private String[] choose;
    private String[] fill;
    private int[] number;

    @Override
    public String toString() {
        return "Submit{" +
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

    public String[] getChoose() {
        return choose;
    }

    public void setChoose(String[] choose) {
        this.choose = choose;
    }

    public String[] getFill() {
        return fill;
    }

    public void setFill(String[] fill) {
        this.fill = fill;
    }


    public int[] getNumber() {
        return number;
    }

    public void setNumber(int[] number) {
        this.number = number;
    }
}
