<template>
    <fieldset>
        <h5>Your Work Experience</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.work" value="" placeholder="Work Experience"/>
        </div>
        <hr>
        <div>
            <div>
                <label>Company Name</label>
                <input class="u-full-width" type="text" name="work[0].company" value="" placeholder="Google"></div>
            <div>
                <label>Job Title</label>
                <input class="u-full-width" type="text" name="work[0].position" value="" placeholder="Software Engineer"></div>
            <div>
                <label>Job Location</label>
                <input class="u-full-width" type="text" name="work[0].location" value="" placeholder="Mountain View, CA"></div>
            <div>
                <label>Start Date</label>
                <input class="u-full-width" type="text" name="work[0].startDate" value="" placeholder="May 2017"></div>
            <div>
                <label>End Date</label>
                <input class="u-full-width" type="text" name="work[0].endDate" value="" placeholder="Dec 2019 / Present"></div>

            <label>Job Responsibilities</label>
            <div>
                <input class="u-full-width" type="text" name="work[0].highlights[0]" value="" placeholder="Did cool stuff at company">
                <div>
                    <button type="button">
                        <i class="material-icons Icon__StyledIcon-daswbx cabjHi">add</i>
                    </button>
                    <button disabled="" type="button">
                        <i class="material-icons Icon__StyledIcon-daswbx cabjHi">remove</i>
                    </button>
                </div>
            </div>
        </div>
        <hr>
        <button type="button">Add Job</button>
        <button disabled="" type="button">Remove Job</button>
    </fieldset>
</template>

<script>
    export default {
        name: "WorkForm",
    }
</script>

<style scoped>

</style>
