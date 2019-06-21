package com.migibert.skilly.model;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Data
public class User {

    @Email
    private String email;

    @NotNull
    private Set<SkillLevel> skillLevels = new HashSet<>();
}
