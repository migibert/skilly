package com.migibert.skilly.resources;

import com.migibert.skilly.model.Organization;

import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/organizations")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class OrganizationResource {

    @POST
    @Transactional
    public Organization create(@Valid Organization organization) {
        organization.persist();
        return organization;
    }

    @GET
    @Transactional
    public List<Organization> list() {
        return Organization.listAll();
    }

    @GET
    @Transactional
    @Path("/{organizationId}")
    public Organization get(@PathParam("/organizationId") Long organizationId) {
        return Organization.findById(organizationId);
    }
}
