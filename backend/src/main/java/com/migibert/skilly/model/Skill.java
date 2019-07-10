package com.migibert.skilly.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;

@Entity
public class Skill extends PanacheEntity {
    private String name;
}
