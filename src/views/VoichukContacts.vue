<template>
   <div class="contacts">
        <div class="container">
            <router-link class="contacts__nav-first" aria-current="page" :to="headerMenuList[0].path">Home</router-link>
            <router-link class="contacts__nav-last" aria-current="page" :to="headerMenuList[1].path">About Us</router-link>
            <h3 class="contacts__title">Our <strong>Contacts</strong></h3>
            <div class="contacts__map">
                <!-- <div class="" id="map">
                    
                </div> -->
            </div>
            <div class="contacts__content row">
                <div class="info col-md-4">
                    <h4 class="info__title">Contact Info</h4>
                    <p class="info__text">
                        Etiam commodo consequat egestas. Morbi at ligula nulla. 
                        Mauris bibendum mi vitae condimentum mollis. 
                        Sed sollicitudin enim vehicula, varius sapien id, consectetur posuere sem commodo.
                    </p>
                    <p class="info__address">
                        Real Home INC.
                        <br>
                        ST STEPHEN'S HOUSE, COLSTON AVE,
                        <br> 
                        BRISTOL, BRISTOL BS1 4ST, UK
                    </p>
                    <ul class="info__list">
                        <li>
                            <p>Telephone:
                                <a href="tel:+380999999999" class="info__link">+380999999999</a>
                            </p>
                        </li>
                        <li>
                            <p>E-mail:
                                <a href="mailto:info@realhome.com" class="info__link info__link_red">info@realhome.com</a>
                            </p>
                        </li>
                    </ul>
                </div>
                <VoichukComment />
            </div>
        </div>
    </div>
</template>

<script>
import VoichukComment from "../components/VoichukComment.vue";
import { menuList } from "../constants/menuLinks";

export default {
    name: "VoichukContacts",
    components: {
        VoichukComment,
    },
    data() {
        return {
            headerMenuList: menuList,
        }
    },
}
</script>
