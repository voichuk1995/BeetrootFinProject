<template>
    <div class="row">
        <div class="col-md-4 col-sm-12" v-for="(item, index) in productList" :key="index">
            <div class="properties__cart cart">
                <img :src="require(`../assets/images/propertis${item.image}`)" :alt="item.title" class="cart__img">
                <h4 class="cart__title">{{ item.title }}</h4>
                <p class="cart__subtitle">{{ item.subtitle }}</p>
                <p class="cart__price">$ {{ item.price.toFixed(3) }}</p>
                <ul class="cart__description">
                    <li class="cart__item">{{ item.description.sqft }} Sq Ft</li>
                    <li class="cart__item">{{ item.description.room }} Badrooms</li>
                    <li class="cart__item">{{ item.description.bathroom }} Bathroom</li>
                </ul>
            </div>
        </div>
        <div class="col">
            <router-link class="btn btn-primary properties__more" aria-current="page" :to="headerMenuList[2].path">All Properties</router-link>
        </div>
    </div>
</template>

<script>
import { menuList } from "../constants/menuLinks";

export default {
    props: {
        productList: {
            type: Array,
            default: () => [],
        },
    },
    data() {
		return {
			headerMenuList: menuList,
		}
	},
}
</script>
