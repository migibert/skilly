package com.migibert.skilly.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
public class Skill {

    @NotEmpty
    private String name;

    @NotNull
    private SkillType type;

    @NotNull
    private SkillCategory category;
}
