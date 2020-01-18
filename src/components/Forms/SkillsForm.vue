<template>
    <fieldset>
        <h5>Your Skills</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.skills" value="" placeholder="Skills"/>
        </div>
        <hr class="">
        <div v-for="(skill,index) in skills" :key="'skill_' + index">
            <div>
                <label>Skill Name</label>
                <input class="u-full-width" type="text" name="skill.name" v-model="skill.name" placeholder="Programming Languages">
            </div>

            <label>Skill Details</label>
            <div v-for="(keyword, keyIndex) in skill.keywords" :key="keyIndex">
                <input class="u-full-width" type="text" :name="`skill.keywords[${keyIndex}]`" v-model="skill.keywords[keyIndex]" placeholder="Javascript">
                <div>
                    <button type="button" disabled="">
                        <i class="material-icons">remove</i>
                    </button>
                    <button type="button" @mouseup="addKeyword(index)">
                        <i class="material-icons">add</i>
                    </button>
                </div>
            </div>
        </div>
        <hr>
        <button type="button" @mouseup="addSkills">Add Skill</button>
        <button disabled="" type="button">Remove Skill</button>
    </fieldset>
</template>

<script>
    export default {
        name: "SkillsForm",
        props: {
            skills: { type: Array, required: true },
        },
        methods: {
            addSkills() {
                this.skills.push({
                    name: "",
                    level: "",
                    keywords: [],
                })
            },

            addKeyword(skillIndex) {
                this.skills[skillIndex].keywords.push("")
            },
        },
    }
</script>

<style scoped>

</style>
