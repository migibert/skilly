package com.migibert.skilly.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotEmpty;
import java.util.Set;

@Entity
@Data
public class Organization extends PanacheEntity {

    @NotEmpty
    @Column(unique = true)
    private String name;

    private String logoUrl;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(joinColumns = @JoinColumn(name="organization_id"), inverseJoinColumns = @JoinColumn(name="member_id"))
    private Set<Member> members;
}
