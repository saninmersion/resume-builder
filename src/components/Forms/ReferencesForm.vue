<template>
    <fieldset>
        <h5>References</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.references" value="" placeholder="References"/>
        </div>
        <hr>
        <div>
            <div>
                <label>Name and Address</label>
                <input class="u-full-width" type="text" name="references[0].name" value="" placeholder="John Doe, Google, New York, NY">
            </div>
            <div>
                <label>Reference</label>
                <textarea cols="100" class="u-full-width" name="references[0].reference" value="" placeholder="Kumar is an extremely talented engineer with a very broad range of skills and experience. From being a thought leader in the front-end community, to designing and implementing the API, working with Thomas has been fantastic learning experience. Thomas is truly a full stack develop, and his work output is incredible."> </textarea>
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
        name: "ReferencesForm",
    }
</script>

<style scoped>

</style>
