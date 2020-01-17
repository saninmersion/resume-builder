<template>
    <fieldset>
        <h5>Your Projects</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.projects" value="" placeholder="Projects"/></div>
        <hr>
        <div>
            <div>
                <label>Project Name</label>
                <input class="u-full-width" type="text" name="projects[0].name" value="" placeholder="Piper Chat"></div>
            <div>
                <label>Project Description</label>
                <input class="u-full-width" type="text" name="projects[0].description" value="" placeholder="A video chat app with great picture quality."></div>
            <div>
                <label>Link to Project</label>
                <input class="u-full-width" type="text" name="projects[0].url" value="" placeholder="http://piperchat.com"></div>

            <label>Tools Used</label>

            <div>
                <input class="u-full-width" type="text" name="projects[0].keywords[0]" value="" placeholder="Java">
                <div>
                    <button><i class="material-icons">add</i></button>
                    <button disabled=""><i class="material-icons">remove</i></button>
                </div>
            </div>
        </div>
        <hr>
        <div>
            <button type="button">Add Project</button>
            <button disabled="" type="button">Remove Project</button>
        </div>
    </fieldset>
</template>

<script>
    export default {
        name: "ProjectForm",
    }
</script>

<style scoped>

</style>
