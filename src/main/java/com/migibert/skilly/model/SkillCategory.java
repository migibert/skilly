package com.migibert.skilly.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class SkillCategory {

    @NotEmpty
    private String name;
}
