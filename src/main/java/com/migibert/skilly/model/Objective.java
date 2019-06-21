package com.migibert.skilly.model;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Data
public class Objective {

    @NotNull
    private User user;

    @NotNull
    private Set<SkillLevel> skillLevels = new HashSet<>();

    @NotNull
    private Set<Resource> resources = new HashSet<>();
}
