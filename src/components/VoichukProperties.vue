<template>
    <div class="row">
        <div class="col-md-4 col-sm-12" v-for="(item, index) in propertiesData" :key="index">
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
            <button type="button" class="btn btn-primary properties__more">All Properties</button>
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
