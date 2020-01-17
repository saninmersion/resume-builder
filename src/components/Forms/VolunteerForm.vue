<template>
    <fieldset>
        <h5>Volunteer Work</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.volunteer" value="" placeholder="Volunteer Work"/>
        </div>
        <hr>
        <div>
            <div>
                <label>Organization Name</label>
                <input class="u-full-width" type="text" name="volunteer[0].organization" value="" placeholder="Google Developers Circle">
            </div>
            <div>
                <label>Position</label>
                <input class="u-full-width" type="text" name="volunteer[0].position" value="" placeholder="Volunteer"></div>
            <div>
                <label>Start Date</label>
                <input class="u-full-width" type="text" name="volunteer[0].startDate" value="" placeholder="October 2019">
            </div>
            <div>
                <label>EndDate</label>
                <input class="u-full-width" type="text" name="volunteer[0].endDate" value="" placeholder="October 2019"></div>
            <div>
                <label>Summary</label>
                <textarea class="u-full-width" name="volunteer[0].summary" value="" placeholder="Volunteered for an awesome event at GDG Fest."> </textarea>
            </div>
            <div class="section-buttons">
                <button type="button">Add Volunteer Work</button>
                <button disabled="" type="button">Remove Volunteer Work</button>
            </div>
        </div>
    </fieldset>
</template>

<script>
    export default {
        name: "VolunteerForm",
    }
</script>

<style scoped>

</style>
