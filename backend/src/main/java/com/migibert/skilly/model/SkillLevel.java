package com.migibert.skilly.model;

import lombok.Data;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Data
public class SkillLevel {

    @NotNull
    private Skill skill;

    @Min(0)
    @Max(10)
    private int level;
}
