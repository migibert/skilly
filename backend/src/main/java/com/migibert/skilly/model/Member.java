package com.migibert.skilly.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;
import java.time.LocalDate;

@Entity
public class Member extends PanacheEntity {
    private String firstname;
    private String lastname;
    private String email;
    private LocalDate arrival;
}
