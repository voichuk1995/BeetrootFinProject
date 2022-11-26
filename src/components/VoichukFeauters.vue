<template>
    <div class="feauters">
        <div class="container">
        <div class="row">
            <div class="col-md-3" v-for="(item, index) in data" :key="index">
                <div class="feauters__col">
                    <img :src="require(`../assets/images/icons/${item.icon}.png`)" :alt="item.title" class="feauters__icon"/>
                    <h4 class="feauters__title">{{ item.title }}</h4>
                    <p class="feauters__text">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

export default {
    props: {
        data: {
            type: Array,
            default: () => [],
        },
    },
}
</script>
