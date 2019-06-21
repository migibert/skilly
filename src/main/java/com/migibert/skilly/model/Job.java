package com.migibert.skilly.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Data
public class Job {

    @NotEmpty
    private String title;

    @NotNull
    private Set<SkillLevel> skillLevels = new HashSet<>();
}
