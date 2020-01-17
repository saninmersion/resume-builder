<template>
    <fieldset>
        <h5>Your Skills</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.skills" value="" placeholder="Skills"/>
        </div>
        <hr class="Divider-elkEmQ blQgfS">
        <div>
            <div>
                <label>Skill Name</label>
                <input class="u-full-width" type="text" name="skills[0].name" value="" placeholder="Programming Languages"></div>

            <label>Skill Details</label>
            <div>
                <input class="u-full-width" type="text" name="skills[0].keywords[0]" value="" placeholder="Javascript">
                <div>
                    <button type="button">
                        <i class="material-icons">add</i>
                    </button>
                    <button type="button" disabled="">
                        <i class="material-icons">remove</i>
                    </button>
                </div>
            </div>
        </div>
        <hr>
        <button type="button">Add Skill</button>
        <button disabled="" type="button">Remove Skill</button>
    </fieldset>
</template>

<script>
    export default {
        name: "SkillsForm",
    }
</script>

<style scoped>

</style>
