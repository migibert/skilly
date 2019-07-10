package com.migibert.skilly.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Data;

import javax.persistence.Entity;

@Entity
@Data
public class Skill extends PanacheEntity {
    private String name;
}
