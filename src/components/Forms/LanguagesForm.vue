<template>
    <fieldset>
        <h5>Languages</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.languages" value="" placeholder="Languages"/>
        </div>
        <hr>
        <div v-for="(language,index) in languages" :key="'resume_language' + index">
            <div>
                <label>Language</label>
                <input class="u-full-width" type="text" name="language.language" v-model="language.language" placeholder="Nepali">
            </div>
            <div>
                <label>Fluency</label>
                <!-- @TODO Change Fluency to drop Down (Native Speaker, Fluent, Conversational, Beginner) -->
                <input class="u-full-width" type="text" name="language.fluency" v-model="language.fluency" placeholder="Native Speaker">
            </div>
            <div class="section-buttons">
                <button type="button" @mouseup="addLanguage">Add Language</button>
                <button disabled="" type="button">Remove Language</button>
            </div>
        </div>
    </fieldset>
</template>

<script>
    export default {
        name: "LanguagesForm",
        props: {
            languages: { type: Array, required: true },
        },
        methods: {
            addLanguage() {
                this.languages.push({
                    name: "",
                    level: "",
                    keywords: [],
                })
            },
        },
    }
</script>

<style scoped>

</style>
