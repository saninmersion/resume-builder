<template>
    <fieldset>
        <h5>Awards &amp; Certifications</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.awards" value="" placeholder="Awards &amp; Certifications"/>
        </div>
        <hr>
        <div v-for="(award,index) in awards" :key="'resume_awards_'+index">
            <div>
                <label>Name</label>
                <input class="u-full-width" type="text" name="award.title" v-model="award.title" placeholder="Supreme Hacker"></div>
            <div>
                <label>Issued Date</label>
                <input class="u-full-width" type="text" name="award.date" v-model="award.date" placeholder="May 2015"></div>
            <div>
                <label>Provider</label>
                <input class="u-full-width" type="text" name="award.awarder" v-model="award.awarder" placeholder="HackNepal"></div>
            <div>
                <label>Summary</label>
                <textarea class="u-full-width" name="award.summary" v-model="award.summary" placeholder="Recognized for creating the most awesome project at a HackNepal hackathon."/></div>
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
        props: {
            awards: { type: Array, required: true },
        },
        methods: {
            addAward() {
                this.awards.push({
                    title: "",
                    date: "",
                    awarder: "",
                    summary: "",
                })
            },
        },
    }
</script>

<style scoped>

</style>
