package com.migibert.skilly.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class SkillLevel extends PanacheEntity {

    @ManyToOne
    @NotNull
    private Organization organization;

    @ManyToOne
    @NotNull
    private Member member;

    @ManyToOne
    @NotNull
    private Skill skill;

    private int level;
}
