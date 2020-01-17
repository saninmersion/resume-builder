<template>
    <fieldset>
        <h5>Languages</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.languages" value="" placeholder="Languages"/>
        </div>
        <hr>
        <div>
            <div>
                <label>Language</label>
                <input class="u-full-width" type="text" name="languages[0].language" value="" placeholder="Nepali">
            </div>
            <div>
                <label>Fluency</label>
                <input class="u-full-width" type="text" name="languages[0].fluency" value="" placeholder="Native Speaker">
            </div>
            <div class="section-buttons">
                <button type="button">Add Language</button>
                <button disabled="" type="button">Remove Language</button>
            </div>
        </div>
    </fieldset>
</template>

<script>
    export default {
        name: "LanguagesForm",
    }
</script>

<style scoped>

</style>
