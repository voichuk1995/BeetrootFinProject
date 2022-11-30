<template>
    <div class="col-md-8 blog__cartlist">
        <div v-for="(item, index) in propertiesData" :key="index" class="blog__cart">
            <h2 class="blog__title">{{ item.title }}</h2>
            <img :src="require(`../assets/images/propertis${item.image}`)" :alt="item.title" class="blog__image">
            <p class="blog__text">{{ item.text }}</p>
            <button class="blog__button">Read More</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        propertiesData: {
            type: Array,
            default: () => [],
        }
    }
}
</script>
