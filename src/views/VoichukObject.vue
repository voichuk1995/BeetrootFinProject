<template>
    <div class="object">
        <div class="container">
            <router-link class="object__nav-first" aria-current="page" :to="headerMenuList[0].path">Home</router-link>
            <router-link class="object__nav-last" aria-current="page" :to="headerMenuList[1].path">About Us</router-link>
            <!-- <div class="object__cart">
                <h2 class="object__title">{{ item.title }}</h2>
                <div class="object__info">
                    <img :src="require(`../assets/images/propertis${item.image}`)" :alt="item.title" class="col-md-8">
                    <div class="object__info-box col-md-4">
                        <p class="object__client">{{ item.client }}</p>
                        <p class="object__data">{{ item.data }}</p>
                        <p class="object__dopInfo">{{ item.dopInfo }}</p>
                        <p class="object__text">{{ item.text }}</p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import { menuList } from "../constants/menuLinks";

export default {
    name: "VoichukObject",
    data() {
        return {
            headerMenuList: menuList,
        }
    },
}
</script>
