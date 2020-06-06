package com.example.sample.demo;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;


@Entity
@Table(name = "newcase")
public class NewCases {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    private String district;

    @NotNull
    @Temporal(TemporalType.DATE)
    private Date Date;

    @NotNull
    private int number_of_cases;

    public Long getId() {
        return id;
    }

    public java.util.Date getDate() {
        return Date;
    }

    public void setDate(java.util.Date date) {
        Date = date;
    }

    public int getNumber_of_cases() {
        return number_of_cases;
    }

    public void setNumber_of_cases(int number_of_cases) {
        this.number_of_cases = number_of_cases;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }


}
