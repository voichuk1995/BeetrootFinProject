<template>
    <div class="catalog">
        <VoichukPropertiesCatalog :category="category" :sortProperties="items" :headerMenuList="headerMenuList" @sort="filterByCategory"/>
        <div class="catalog__nav">
            <Paginate 
                v-model="page"
                :page-count="pageCount"
                :page-range="3"
                :click-handler="pageChangeHandler"
                :prev-text="'Previous'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'"
                :page-link-class="'page-item-link'"
                :prev-class="'page-item-arrow'"
                :next-class="'page-item-arrow'"
                :prev-link-class="'page-item-link'"
                :next-link-class="'page-item-link'"
            />
        </div>
    </div>
</template>

<script>
import VoichukPropertiesCatalog from "../components/VoichukPropertiesCatalog.vue";
import paginationMixin from "../assets/mixins/pagination.mixin.js";
import Paginate from "../../node_modules/vuejs-paginate/src/components/Paginate.vue";
import { propertiesData } from "../data/data.all";
import { menuList } from "../constants/menuLinks";

export default {
    name: "VoichukProperties",
    components: {
        VoichukPropertiesCatalog,
        Paginate,
    },
    mixins: [paginationMixin],
    data() {
        return {
            propertiesData: propertiesData,
            headerMenuList: menuList,
            category: [
                {name: "ALL", value: "ALL"},
                {name: "Missouri / Kansas City", value: "KANSAS CITY"},
                {name: "Colorado / Denver", value: "DENVER"},
                {name: "Illinois / Chicago", value: "CHICAGO"},
            ],
        }
    },
    computed: {
        sortProperties() {
            if (this.items.length) {

                return this.items; 
                 
            } else {
                return this.propertiesData
            }
        },
    },
    methods: {
        filterByCategory(category){
            this.items = [];
            
            this.propertiesData.map((item) => {

                if (item.category === category){
                    this.items.push(item);      
                }
            });
            
            // if (this.items.length) {
            //     this.sortProperties;
            // }
            //не заходить ще раз в сорт і не обновлює айтемс
        },
    },
    mounted() {
        this.setupPagination(this.sortProperties.map(product => {
            return {
                ...product
            }
        }))
    }, 
}
</script>
