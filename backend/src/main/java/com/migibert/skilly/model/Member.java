package com.migibert.skilly.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Data
public class Member extends PanacheEntity {

    @ManyToMany(mappedBy = "members")
    private Set<Organization> organizations;

    @NotEmpty
    private String firstname;

    @NotEmpty
    private String lastname;

    @Email
    private String email;

    private LocalDate arrival;
}
