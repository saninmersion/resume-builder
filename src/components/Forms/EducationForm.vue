<template>
    <fieldset>
        <h5>Your Educational Background</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.education" value="" placeholder="Education"/>
        </div>
        <hr class="Divider-elkEmQ blQgfS">
        <div>
            <div>
                <label>School Name</label>
                <input class="u-full-width" type="text" name="education[0].institution" value="" placeholder="Tribhuvan University"></div>
            <div>
                <label>School Location</label>
                <input class="u-full-width" type="text" name="education[0].location" value="" placeholder="Kirtipur, Kathmandu, Nepal"></div>
            <div>
                <label>Degree</label>
                <input class="u-full-width" type="text" name="education[0].studyType" value="" placeholder="BS"></div>
            <div>
                <label>Major</label>
                <input class="u-full-width" type="text" name="education[0].area" value="" placeholder="Computer Science"></div>
            <div>
                <label>GPA</label>
                <input class="u-full-width" type="text" name="education[0].gpa" value="" placeholder="3.6"></div>
            <div>
                <label>Start Date</label>
                <input class="u-full-width" type="text" name="education[0].startDate" value="" placeholder="Sep 2015"></div>
            <div>
                <label>End Date</label>
                <input class="u-full-width" type="text" name="education[0].endDate" value="" placeholder="Jun 2019"></div>
        </div>
        <button type="button">Add School</button>
        <button disabled type="button">Remove School</button>
    </fieldset>
</template>

<script>
    export default {
        name: "EducationForm",
    }
</script>

<style scoped>

</style>
