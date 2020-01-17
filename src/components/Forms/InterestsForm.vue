<template>
    <fieldset>
        <h5>Interests &amp; Hobbies</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.interests" value="" placeholder="Interests &amp; Hobbies"/>
        </div>
        <hr>
        <div>
            <div>
                <label>Interest / Hobby</label>
                <input class="u-full-width" type="text" name="interests[0].name" value="" placeholder="Travelling">
            </div>
            <div class="section-buttons">
                <button type="button">Add Interest</button>
                <button disabled="" type="button">Remove Interest</button>
            </div>
        </div>
    </fieldset>
</template>

<script>
    export default {
        name: "InterestsForm",
    }
</script>

<style scoped>

</style>
