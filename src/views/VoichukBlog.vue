<template>
    <div class="blog">
        <div class="container">
            <router-link class="blog__nav-first" aria-current="page" :to="headerMenuList[0].path">Home</router-link>
            <router-link class="blog__nav-last" aria-current="page" :to="headerMenuList[3].path">Blog</router-link>
            <div class="row blog__content">
                <VoichukBlogCatalog :propertiesData="items"/>
                <div class="col-md-4 col-sm-12 blog__filter">
                    <div>
                        <h3 class="blog__categories">Categories</h3>
                        <ul class="blog__list">
                            <li v-for="(item, index) in categories" :key="index" class="blog__item">{{ item.value }}</li>
                        </ul>
                    </div>
                    <div>
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
            <div class="row">
                <Paginate 
                    v-model="page"
                    :page-count="pageCount"
                    :page-range="3"
                    :click-handler="pageChangeHandler"
                    :container-class="'pagination-blog'"
                    :page-class="'page-item'"
                    :page-link-class="'page-item-link'"
                    :prev-class="'page-item-arrow-none'"
                    :next-class="'page-item-arrow-none'"
                />
            </div>
        </div>
    </div>
</template>

<script>
import VoichukBlogCatalog from "../components/VoichukBlogCatalog.vue";
import { propertiesData } from "../data/data.all";
import paginationBlog from "../assets/mixins/pagination.blog";
import Paginate from "../../node_modules/vuejs-paginate/src/components/Paginate.vue";
import { menuList } from "../constants/menuLinks";
export default {
    name: "VoichukBlog",
    components: {
        VoichukBlogCatalog,
        Paginate
    },
    mixins: [paginationBlog],
    data() {
        return {
            propertiesData: propertiesData,
            headerMenuList: menuList,
            categories: [
                {name: "Art Direction", value: "Art Direction"},
                {name: "Digital Photography", value: "Digital Photography"},
                {name: "Information Architecture", value: "Information Architecture"},
                {name: "Interior Design", value: "Interior Design"},
                {name: "Motion Graphics", value: "Motion Graphics"},
                {name: "Photoshop Tools", value: "Photoshop Tools"},
            ],
        }
    },
    async mounted() {
        this.setupPagination(this.propertiesData.map(product => {
            return {
                ...product
            }
        }))
    },
}
</script>
