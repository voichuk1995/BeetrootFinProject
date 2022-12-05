<template>
        <div class="container">
            <router-link class="catalog__nav-first" aria-current="page" :to="headerMenuList[0].path">Home</router-link>
            <router-link class="catalog__nav-last" aria-current="page" :to="headerMenuList[2].path">Property</router-link>
            <h3 class="catalog__title">Property <strong>Catalog</strong></h3>
            <ul class="catalog__list">
                <li v-for="(item) in category" :key="item.value" class="catalog__item" v-on:click="filterByCategory(item.name)">{{ item.value }}</li>
            </ul>
            <div class="catalog__container">
                <div class="row">
                    <div v-for="(item, index) in sortProperties " :key="index" :class="{
                        'col-md-6': index < 2,
                        'col-md-4': index > 1 && index < 5,
                        'col-md-3': index > 4 && index < 9}">
                        <div class="product">
                            <img :src="require(`../assets/images/propertis${item.image}`)" :alt="item.title" class="product__img">
                            <h4 class="product__title">{{ item.title }}</h4>
                            <p class="product__subtitle">{{ item.category }}</p>
                            <p class="product__price">$ {{ item.price.toFixed(3) }}</p>
                            <ul class="product__description">
                                <li class="product__item">{{ item.description.sqft }} Sq Ft</li>
                                <li class="product__item">{{ item.description.room }} Badrooms</li>
                                <li class="product__item">{{ item.description.bathroom }} Bathroom</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

export default {
    data() {
        return {
            category: [
                {name: "ALL", value: "ALL"},
                {name: "Missouri / Kansas City", value: "KANSAS CITY"},
                {name: "Colorado / Denver", value: "DENVER"},
                {name: "Illinois / Chicago", value: "CHICAGO"},
            ],
            filterProperties: [],
        }
    },
    props: {
        propertiesData: {
            type: Array,
            default: () => [],
        },
        headerMenuList: {
            type: Array,
            default: () => [],
        }
    },
    computed: {
        sortProperties() {
            if (this.filterProperties.length) {
                return this.filterProperties
            } else {
                return this.propertiesData
            }
        },
    },
    methods: {
        filterByCategory(category){
            this.filterProperties = [];

            this.propertiesData.map((item) => {
                 
                if (item.category === category){
                    this.filterProperties.push(item);   
                }
            });
        },
    }
}
</script>
