package com.migibert.skilly.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Data
public class Resource {

    @NotEmpty
    private String name;

    @NotNull
    private Set<String> videos = new HashSet<>();

    @NotNull
    private Set<String> moocs = new HashSet<>();
}
