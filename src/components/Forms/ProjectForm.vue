<template>
    <fieldset>
        <h5>Your Projects</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.projects" value="" placeholder="Projects"/></div>
        <hr>
        <div v-for="(project,index) in projects" :key="'project_' + index">
            <div>
                <label>Project Name</label>
                <input class="u-full-width" type="text" name="project.name" v-model="project.name" placeholder="Piper Chat"></div>
            <div>
                <label>Project Description</label>
                <input class="u-full-width" type="text" name="project.description" v-model="project.description" placeholder="A video chat app with great picture quality."></div>
            <div>
                <label>Link to Project</label>
                <input class="u-full-width" type="text" name="project.url" v-model="project.url" placeholder="http://piperchat.com"></div>

            <label>Tools Used</label>

            <div v-for="(keyword, keyIndex) in project.keywords" :key="keyIndex">
                <input class="u-full-width" type="text" name="project.keywords" v-model="project.keywords[keyIndex]" placeholder="Java">
                <div>
                    <button><i class="material-icons" @mouseup="addKeyword">add</i></button>
                    <button disabled=""><i class="material-icons">remove</i></button>
                </div>
            </div>
            <hr>
        </div>
        <div>
            <button type="button" @mouseup="addProject">Add Project</button>
            <button disabled="" type="button">Remove Project</button>
        </div>
    </fieldset>
</template>

<script>
    export default {
        name: "ProjectForm",
        props: {
            projects: { type: Array, required: true },
        },
        methods: {
            addProject() {
                this.projects.push({
                    name: "",
                    description: "",
                    url: "",
                    keywords: [],
                })
            },

            addKeyword(projectIndex) {
                this.projects[projectIndex].keywords.push("")
            }
        },
    }
</script>

<style scoped>

</style>
