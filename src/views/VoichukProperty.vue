<template>
    <div class="catalog">
        <VoichukPropertiesCatalog :propertiesData="items" :headerMenuList="headerMenuList"/>
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
