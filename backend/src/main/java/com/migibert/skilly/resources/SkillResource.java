package com.migibert.skilly.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/organizations/{organizationId}/skills")
public class SkillResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String hello() {
        return "hello";
    }
}