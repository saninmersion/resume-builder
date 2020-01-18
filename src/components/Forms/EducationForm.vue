<template>
    <fieldset>
        <h5>Your Educational Background</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.education" value="" placeholder="Education"/>
        </div>
        <hr class="">
        <div v-for="(educationItem , index) in education" :key="'resume_education_' + index">
            <div>
                <label>School Name</label>
                <input class="u-full-width" type="text" name="education.institution" v-model="educationItem.institution" placeholder="Tribhuvan University"></div>
            <div>
                <label>School Location</label>
                <input class="u-full-width" type="text" name="education.location" v-model="educationItem.location" placeholder="Kirtipur, Kathmandu, Nepal"></div>
            <div>
                <label>Degree</label>
                <input class="u-full-width" type="text" name="education.studyType" v-model="educationItem.studyType" placeholder="BS"></div>
            <div>
                <label>Major</label>
                <input class="u-full-width" type="text" name="education.area" v-model="educationItem.area" placeholder="Computer Science"></div>
            <div>
                <label>GPA</label>
                <input class="u-full-width" type="text" name="education.gpa" v-model="educationItem.gpa" placeholder="3.6"></div>
            <div>
                <label>Start Date</label>
                <input class="u-full-width" type="text" name="education.startDate" v-model="educationItem.startDate" placeholder="Sep 2015"></div>
            <div>
                <label>End Date</label>
                <input class="u-full-width" type="text" name="education.endDate" v-model="educationItem.endDate" placeholder="Jun 2019"></div>
            <hr>
        </div>
        <button type="button" @mouseup="addEducation">Add School</button>
        <button disabled type="button">Remove School</button>
    </fieldset>
</template>

<script>
    export default {
        name: "EducationForm",
        props: {
            education : { type: Array, required: true, default: () => []}
        },
        methods: {
            addEducation() {
                this.education.push({
                    institution: "",
                    area: "",
                    studyType: "",
                    startDate: "",
                    endDate: "",
                    gpa: "",
                    courses: [
                        "",
                    ],
                })
            },
        }
    }
</script>

<style scoped>

</style>
