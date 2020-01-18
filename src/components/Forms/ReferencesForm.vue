<template>
    <fieldset>
        <h5>References</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.references" value="" placeholder="References"/>
        </div>
        <hr>
        <div  v-for="(reference,index) in references" :key="'reference_' + index">
            <div>
                <label>Name and Address</label>
                <input class="u-full-width" type="text" name="reference.name" v-model="reference.name" placeholder="John Doe, Google, New York, NY">
            </div>
            <div>
                <label>Reference</label>
                <textarea rows="10" class="u-full-width" name="reference.reference" v-model="reference.reference" placeholder="Kumar is an extremely talented engineer with a very broad range of skills and experience."> </textarea>
            </div>
            <div class="section-buttons">
                <button type="button" @mouseup="addReference">Add Reference</button>
                <button disabled="" type="button">Remove Reference</button>
            </div>
        </div>
    </fieldset>
</template>

<script>
    export default {
        name: "ReferencesForm",
        props: {
            references: { type: Array, required: true },
        },
        methods: {
            addReference() {
                this.references.push({
                    name: "",
                    reference: "",
                })
            },
        },
    }
</script>

<style scoped>

</style>
