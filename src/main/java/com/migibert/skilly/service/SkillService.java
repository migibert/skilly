package com.migibert.skilly.service;

import com.migibert.skilly.model.Skill;
import com.migibert.skilly.model.SkillCategory;

import javax.inject.Singleton;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Singleton
public class SkillService {

    private Set<Skill> skillDataset = new HashSet<>();
    private Set<SkillCategory> skillCategoriesDataset = new HashSet<>();

    public List<Skill> listSkills() {
        return skillDataset.stream().collect(Collectors.toList());
    }

    public Optional<Skill> findSkill(Predicate<Skill> predicate) {
        return this.skillDataset.stream().filter(predicate).findFirst();
    }

    public void addSkill(Skill skill) {
        this.skillDataset.add(skill);
    }

    public void removeSkill(Skill skill) {
        this.skillDataset.remove(skill);
    }

    public void updateSkill(Skill oldSkill, Skill newSkill) {
        this.skillDataset.remove(oldSkill);
        this.skillDataset.add(newSkill);
    }

    public List<SkillCategory> listSkillCategories() {
        return this.skillCategoriesDataset.stream().collect(Collectors.toList());
    }

    public Optional<SkillCategory> findSkillCategory(Predicate<SkillCategory> predicate)  {
        return this.skillCategoriesDataset.stream().filter(predicate).findFirst();
    }

    public void addSkillCategory(SkillCategory category) {
        this.skillCategoriesDataset.add(category);
    }

    public void removeSkillCategory(SkillCategory category) {
        this.skillCategoriesDataset.remove(category);
    }


    public void updateSkillCategory(Skill oldSkillCategory, Skill newSkillCategory) {
        this.skillDataset.remove(oldSkillCategory);
        this.skillDataset.add(newSkillCategory);
    }

}
