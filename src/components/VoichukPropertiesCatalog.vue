<template>
    <div class="catalog">
        <div class="container">
            <a href="" class="catalog__nav-first">Home</a>
            <a href="" class="catalog__nav-last">Property</a>
            <h3 class="catalog__title">Property <strong>Catalog</strong></h3>
            <ul class="catalog__list">
                <li class="catalog__item active">CHICAGO</li>
                <li class="catalog__item">KANSAS CITY</li>
                <li class="catalog__item">DENVER</li>
                <li class="catalog__item">NEW-YORK</li>
                <li class="catalog__item">LONDON</li>
            </ul>
            <div class="catalog__container">
                <div class="row">
                    <div v-for="(item, index) in propertiesData" :key="index" :class="{
                        'col-md-6': index < 2,
                        'col-md-4': index > 1 && index < 5,
                        'col-md-3': index > 4 && index < 9}">
                        <div class="product">
                            <img :src="require(`../assets/images/propertis${item.image}`)" :alt="item.title" class="product__img">
                            <h4 class="product__title">{{ item.title }}</h4>
                            <p class="product__subtitle">{{ item.subtitle }}</p>
                            <p class="product__price">$ {{ item.price.toFixed(3) }}</p>
                            <ul class="product__description">
                                <li class="product__item">{{ item.description.sqft }} Sq Ft</li>
                                <li class="product__item">{{ item.description.room }} Badrooms</li>
                                <li class="product__item">{{ item.description.bathroom }} Bathroom</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="catalog__nav">
                    
                </div>
                <div class="faq">
                    <a href="" class="faq__nav-first">Home</a>
                    <a href="" class="faq__nav-midle">About Us</a>
                    <a href="" class="faq__nav-last">FAQ</a>
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
    },
}
</script>
