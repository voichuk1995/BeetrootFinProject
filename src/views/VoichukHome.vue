<template>
    <div class="home">
        <VoichukCarusel />
        <div class="container offering">
            <div class="row">
                <div class="col-md-4 offering__border">
                    <h3 class="offering__title">
                        We are Offering the Best Estate Deals
                    </h3>
                </div>
                <div class="col-md-8">
                    <p class="offering__text">
                        Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. 
                        Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. 
                        Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. 
                        Aenean commodo ligula eget dolor. Aenean massa. 
                        Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. 
                        Lorem ipsum dolor sitamet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et.
                    </p>
                </div>
            </div>   
        </div>
        <VoichukFeauters :data="feautersData"/>
        <div class="properties">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2 class="properties__title">Featured <strong>Properties</strong></h2>
                        <p class="properties__subtitle">Quisque diam lorem interdum vitaapibus vitae pede. 
                            Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar.
                        </p>
                    </div>
                </div>
                <VoichukProperties :productList="productList"/>
            </div>
        </div>
        <div class="home__slider">
            <VoichukSliderAgents />
        </div>
        <div class="home__started">
            <VoichukStarted />
        </div>
        <div class="home__partners">
            <VoichukPartners />
        </div>
    </div>
</template>

<script>
import { feautersData } from "../data/data.all";
import { mapGetters, mapActions } from "vuex";


import VoichukCarusel from "../components/VoichukCarusel.vue";
import VoichukFeauters from "../components/VoichukFeauters.vue";
import VoichukProperties from "../components/VoichukProperties.vue";
import VoichukSliderAgents from "../components/VoichukSliderAgents.vue";
import VoichukStarted from "../components/VoichukStarted.vue";
import VoichukPartners from "../components/VoichukPartners.vue";

export default {
    name: "VoichukHome",
    components:{
        VoichukCarusel,
        VoichukFeauters,
        VoichukProperties,
        VoichukSliderAgents,
        VoichukStarted,
        VoichukPartners,
    },
    data() {
        return {
            feautersData: feautersData,
        }
    },
    computed: {
        ...mapGetters(["PRODUCTS"]), 
    },
    methods: {
        ...mapActions(["getProductList"]), 
    },
    mounted() {
        this.getProductList();
    }
};
</script>
