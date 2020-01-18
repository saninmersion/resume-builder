<template>
    <fieldset>
        <h5>Volunteer Work</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.volunteer" value="" placeholder="Volunteer Work"/>
        </div>
        <hr>
        <div v-for="(volunteerItem,index) in volunteer" :key="'volunteer_' + index">
            <div>
                <label>Organization Name</label>
                <input class="u-full-width" type="text" name="volunteer.organization" v-model="volunteerItem.organization" placeholder="Google Developers Circle">
            </div>
            <div>
                <label>Position</label>
                <input class="u-full-width" type="text" name="volunteer.position" v-model="volunteerItem.position" placeholder="Volunteer"></div>
            <div>
                <label>Start Date</label>
                <input class="u-full-width" type="text" name="volunteer.startDate" v-model="volunteerItem.startDate" placeholder="October 2019">
            </div>
            <div>
                <label>EndDate</label>
                <input class="u-full-width" type="text" name="volunteer.endDate" v-model="volunteerItem.endDate" placeholder="October 2019"></div>
            <div>
                <label>Summary</label>
                <textarea class="u-full-width" name="volunteer.summary" v-model="volunteerItem.summary" placeholder="Volunteered for an awesome event at GDG Fest."> </textarea>
            </div>
            <hr>
        </div>
        <div class="section-buttons">
            <button type="button" @mouseup="addVolunteer">Add Volunteer Work</button>
            <button disabled="" type="button">Remove Volunteer Work</button>
        </div>
    </fieldset>
</template>

<script>
    export default {
        name: "VolunteerForm",
        props: {
            volunteer: { type: Array, required: true },
        },
        methods: {
            addVolunteer() {
                this.volunteer.push({
                    organization: "",
                    position: "",
                    website: "",
                    startDate: "",
                    endDate: "",
                    summary: "",
                    highlights: [],
                })
            },

            addHighlight(volunteerIndex) {
                this.volunteer[volunteerIndex].highlights.push("")
            }
        },
    }
</script>

<style scoped>

</style>
