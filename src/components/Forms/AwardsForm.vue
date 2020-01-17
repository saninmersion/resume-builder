<template>
        <fieldset>
            <h5>Awards &amp; Certifications</h5>
            <div>
                <label>Section Heading</label>
                <input class="u-full-width" type="text" name="headings.awards" value="" placeholder="Awards &amp; Certifications"/>
            </div>
            <hr>
            <div>
                <div>
                    <label>Name</label>
                    <input class="u-full-width" type="text" name="awards[0].title" value="" placeholder="Supreme Hacker"></div>
                <div>
                    <label>Issued Date</label>
                    <input class="u-full-width" type="text" name="awards[0].date" value="" placeholder="May 2015"></div>
                <div>
                    <label>Provider</label>
                    <input class="u-full-width" type="text" name="awards[0].awarder" value="" placeholder="HackNepal"></div>
                <div>
                    <label>Summary</label>
                    <textarea class="u-full-width" name="awards[0].summary" value="" placeholder="Recognized for creating the most awesome project at a HackNepal hackathon." /></div>
            </div>
            <div class="section-buttons">
                <button type="button">Add Award</button>
                <button disabled="" type="button">Remove Award</button>
            </div>
        </fieldset>
</template>

<script>
    export default {
        name: "AwardsForm",
    }
</script>

<style scoped>

</style>
