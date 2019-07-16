package com.migibert.skilly.resources;

import com.migibert.skilly.model.Organization;
import com.migibert.skilly.model.Skill;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.swing.plaf.metal.MetalComboBoxEditor;
import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.ForbiddenException;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/organizations/{organizationId}/skills")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Transactional
public class SkillResource {

    @POST
    public Skill create(@PathParam("organizationId") long organizationId, @Valid Skill skill) {
        skill.setOrganization(Organization.findById(organizationId));
        skill.persistAndFlush();
        return skill;
    }

    @GET
    public List<Skill> list(@PathParam("organizationId") Long organizationId) {
        return Skill.list("organization.id", organizationId);
    }

    @GET
    @Path("/{skillId}")
    public Skill get(@PathParam("organizationId") Long organizationId, @PathParam("skillId") Long skillId) {
        Skill skill = Skill.findById(skillId);
        return skill;
    }
}