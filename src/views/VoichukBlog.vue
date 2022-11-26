<template>
    <div class="blog">
        <div class="container">
            <a href="#" class="blog__nav-first">Home</a>
            <a href="#" class="blog__nav-last">Blog</a>
            <div class="row">
                <div class="col-md-8 blog__cartlist">
                    <div v-for="(item, index) in propertiesData.slice(0,3)" :key="index" class="blog__cart">
                        <h2 class="blog__title">{{ item.title }}</h2>
                        <img :src="require(`../assets/images/propertis${item.image}`)" :alt="item.title" class="blog__image">
                        <p class="blog__text">{{ item.text }}</p>
                        <button class="blog__button">Read More</button>
                    </div>
                </div>
                <div class="col-md-4 blog__filter">
                    <h3 class="blog__categories">Categories</h3>
                    <ul class="blog__list">
                        <li class="blog__item">Art Direction</li>
                        <li class="blog__item">Digital Photography</li>
                        <li class="blog__item">Information Architecture</li>
                        <li class="blog__item">Interior Design</li>
                        <li class="blog__item">Motion Graphics</li>
                        <li class="blog__item">Photoshop Tools</li>
                    </ul>
                    <h3 class="blog__categories">Archives</h3>
                    <ul class="blog__list">
                        <li class="blog__item">December 2022</li>
                        <li class="blog__item">November 2022</li>
                        <li class="blog__item">October 2022</li>
                        <li class="blog__item">September 2022</li>
                        <li class="blog__item">August 2022</li>
                        <li class="blog__item">July 2022</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { propertiesData } from "../data/data.all";

export default {
    data() {
        return {
            propertiesData: propertiesData,
        }
    },
}
</script>
