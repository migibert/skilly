package com.migibert.skilly.resources;

import com.migibert.skilly.model.Skill;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.swing.plaf.metal.MetalComboBoxEditor;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/skills")
public class SkillResource {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public Skill create(Skill skill) {
        skill.persistAndFlush();
        return skill;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public List<Skill> list() {
        return Skill.listAll();
    }
}