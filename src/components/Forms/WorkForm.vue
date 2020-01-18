<template>
    <fieldset>
        <h5>Your Work Experience</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.work" value="" placeholder="Work Experience"/>
        </div>
        <hr>
        <div v-for="(workItem, index) in work" :key="'work-' + index">
            <div>
                <label>Company Name</label>
                <input class="u-full-width" type="text" name="workItem.company" v-model="workItem.company" placeholder="Google"></div>
            <div>
                <label>Job Title</label>
                <input class="u-full-width" type="text" name="workItem.position" v-model="workItem.position" placeholder="Software Engineer"></div>
            <div>
                <label>Job Location</label>
                <input class="u-full-width" type="text" name="workItem.location" v-model="workItem.location" placeholder="Mountain View, CA"></div>
            <div>
                <label>Start Date</label>
                <input class="u-full-width" type="text" name="workItem.startDate" v-model="workItem.startDate" placeholder="May 2017"></div>
            <div>
                <label>End Date</label>
                <input class="u-full-width" type="text" name="workItem.endDate" v-model="workItem.endDate" placeholder="Dec 2019 / Present"></div>

            <label>Job Responsibilities</label>
            <div v-for="(highlight, highlightIndex) in workItem.highlights" :key="'work.highlights'+highlightIndex">
                <input class="u-full-width" type="text" :name="'work.highlights['+highlightIndex+']'" v-model="workItem.highlights[highlightIndex]" placeholder="Did cool stuff at company">
                <div>
                    <button disabled="" type="button">
                        <i class="material-icons">remove</i>
                    </button>

                    <button v-if="highlightIndex === (workItem.highlights.length - 1) " type="button" @mouseup.prevent="addHighlight(index)">
                        <i class="material-icons">add</i>
                    </button>
                </div>
            </div>
        </div>
        <hr>
        <button type="button" @mouseup="addWork">Add Job</button>
        <button disabled="" type="button">Remove Job</button>
    </fieldset>
</template>

<script>
    export default {
        name: "WorkForm",
        props: {
            work: { type: Array, required: true },
        },
        methods: {
            addWork() {
                this.work.push({
                    company: "",
                    position: "",
                    website: "",
                    startDate: "",
                    endDate: "",
                    summary: "",
                    highlights: [
                        "",
                    ],
                })
            },
            addHighlight(workIndex) {
                this.work[workIndex].highlights.push("")
            }
        }
    }
</script>

<style scoped>

</style>
