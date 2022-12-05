<template>
    <div class="container">
        <div class="faq">
            <router-link class="faq__nav-first" aria-current="page" :to="headerMenuList[0].path">Home</router-link>
            <router-link class="faq__nav-midle" aria-current="page" :to="headerMenuList[1].path">About Us</router-link>
            <router-link class="faq__nav-last" aria-current="page" :to="headerMenuList[2].path">FAQ</router-link>
            <h3 class="faq__title">FAQ</h3>
            <div class="faq__box">
                <div class="faq__row">
                    <div class="faq__item">
                        <div class="faq__img-q">
                            <span>Q</span>
                        </div>
                        <p class="faq__text-q">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ea. 
                            Laborum similique aliquid doloremque amet consectetur? 
                            Nobis quo dolorum adipisci ad dolor modi ut. 
                            Vitae, ad accusantium quis magni ratione modi ex ab libero perferendis 
                            laborum sunt quae nisi quasi error iusto ipsa itaque omnis. 
                            Eos perferendis similique beatae praesentium.
                        </p>
                    </div>
                    <div class="faq__item">
                        <div class="faq__img-a">
                            <span>A</span>
                        </div>
                        <p class="faq__text-a">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ea. 
                            Laborum similique aliquid doloremque amet consectetur? 
                            Nobis quo dolorum adipisci ad dolor modi ut. 
                            Vitae, ad accusantium quis magni ratione modi ex ab libero perferendis 
                            laborum sunt quae nisi quasi error iusto ipsa itaque omnis. 
                            Eos perferendis similique beatae praesentium.
                        </p>
                    </div>
                </div>
                    <div class="faq__row">
                    <div class="faq__item">
                        <div class="faq__img-q">
                            <span>Q</span>
                        </div>
                        <p class="faq__text-q">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ea. 
                            Laborum similique aliquid doloremque amet consectetur? 
                            Nobis quo dolorum adipisci ad dolor modi ut. 
                            Vitae, ad accusantium quis magni ratione modi ex ab libero perferendis 
                            laborum sunt quae nisi quasi error iusto ipsa itaque omnis. 
                            Eos perferendis similique beatae praesentium.
                        </p>
                    </div>
                    <div class="faq__item">
                        <div class="faq__img-a">
                            <span>A</span>
                        </div>
                        <p class="faq__text-a">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ea. 
                            Laborum similique aliquid doloremque amet consectetur? 
                            Nobis quo dolorum adipisci ad dolor modi ut. 
                            Vitae, ad accusantium quis magni ratione modi ex ab libero perferendis 
                            laborum sunt quae nisi quasi error iusto ipsa itaque omnis. 
                            Eos perferendis similique beatae praesentium.
                        </p>
                    </div>
                </div>
                    <div class="faq__row">
                    <div class="faq__item">
                        <div class="faq__img-q">
                            <span>Q</span>
                        </div>
                        <p class="faq__text-q">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ea. 
                            Laborum similique aliquid doloremque amet consectetur? 
                            Nobis quo dolorum adipisci ad dolor modi ut. 
                            Vitae, ad accusantium quis magni ratione modi ex ab libero perferendis 
                            laborum sunt quae nisi quasi error iusto ipsa itaque omnis. 
                            Eos perferendis similique beatae praesentium.
                        </p>
                    </div>
                    <div class="faq__item">
                        <div class="faq__img-a">
                            <span>A</span>
                        </div>
                        <p class="faq__text-a">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ea. 
                            Laborum similique aliquid doloremque amet consectetur? 
                            Nobis quo dolorum adipisci ad dolor modi ut. 
                            Vitae, ad accusantium quis magni ratione modi ex ab libero perferendis 
                            laborum sunt quae nisi quasi error iusto ipsa itaque omnis. 
                            Eos perferendis similique beatae praesentium.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { menuList } from "../constants/menuLinks";

export default {
    name: "VoichukFAQ",
    data() {
        return {
            headerMenuList: menuList,
        }
    },
}
</script>
