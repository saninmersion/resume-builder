<template>
    <section>
        <div class="section_title">
            <h1>{{heading}}</h1>
        </div>

        <div class="section_content">
            <article v-for="(item,index) in data" :key="heading + '_' + index">
                <h2>{{item.position}} at {{item.company}}</h2>
                <p class="subDetails">{{item.startDate}} - {{item.endDate}}</p>
                <p>{{item.summary}}</p>
            </article>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ResumeCategorySection",
        props: {
            heading: { type: String, required: true },
            data: { type: Array, required: true },
        },
    }
</script>

<style scoped>

</style>
