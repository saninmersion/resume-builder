<template>
    <fieldset>
        <h5>Interests &amp; Hobbies</h5>
        <div>
            <label>Section Heading</label>
            <input class="u-full-width" type="text" name="headings.interests" value="" placeholder="Interests &amp; Hobbies"/>
        </div>
        <hr>
        <div v-for="(interest, index) in interests" :key="'reusme_interest_' + index">
            <div>
                <label>Interest / Hobby</label>
                <input class="u-full-width" type="text" name="interest.name" v-model="interest.name" placeholder="Travelling">
            </div>

            <label>Keywords</label>
            <div v-for="(keyword, keyIndex) in interest.keywords" :key="keyIndex">
                <input class="u-full-width" type="text" :name="`skill.keywords[${keyIndex}]`" v-model="interest.keywords[keyIndex]" placeholder="Hiking">
                <div>
                    <button type="button" disabled="">
                        <i class="material-icons">remove</i>
                    </button>
                    <button type="button" @mouseup="addKeyword(index)">
                        <i class="material-icons">add</i>
                    </button>
                </div>
            </div>

            <div class="section-buttons">
                <button type="button" @mouseup="addInterest">Add Interest</button>
                <button disabled="" type="button">Remove Interest</button>
            </div>
        </div>
    </fieldset>
</template>

<script>
    export default {
        name: "InterestsForm",
        props: {
            interests: { type: Array, required: true },
        },
        methods: {
            addInterest() {
                this.interests.push({
                    name: "",
                    keywords: [],
                })
            },

            addKeyword(interestIndex) {
                this.interests[interestIndex].keywords.push("")
            }
        },
    }
</script>

<style scoped>

</style>
