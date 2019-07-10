package com.migibert.skilly.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public class SkillLevel extends PanacheEntity {

    @ManyToOne
    private Member member;

    @ManyToOne
    private Skill skill;

    private int level;
}
