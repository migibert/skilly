package com.migibert.skilly.controller;

import com.migibert.skilly.model.Skill;
import com.migibert.skilly.model.SkillCategory;
import com.migibert.skilly.service.SkillService;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Consumes;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Post;
import io.micronaut.http.annotation.Produces;
import io.micronaut.http.annotation.Status;

import java.util.List;

@Controller("/skills")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class SkillController {

    private final SkillService service;

    public SkillController(SkillService service) {
        this.service = service;
    }

    @Get
    @Status(HttpStatus.OK)
    public List<Skill> listSkills() {
        return service.listSkills();
    }

    @Get("/{name}")
    @Status(HttpStatus.OK)
    public Skill getSkill(String name) {
        return service.findSkill(skill -> skill.getName().equals(name)).get();
    }

    @Post
    @Status(HttpStatus.CREATED)
    public void createSkill(@Body Skill skill) {
        service.addSkill(skill);
    }


    @Get("/categories")
    @Status(HttpStatus.OK)
    public List<SkillCategory> getSkillCategories() {
        return service.listSkillCategories();
    }

    @Get("/categories/{name}")
    @Status(HttpStatus.OK)
    public SkillCategory getSkillCategory(String name) {
        return service.findSkillCategory(skillCategory -> skillCategory.getName().equals(name)).get();
    }

    @Post("/categories")
    @Status(HttpStatus.CREATED)
    public void createSkillCategory(@Body SkillCategory skillCategory) {
        service.addSkillCategory(skillCategory);
    }
}
