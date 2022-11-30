<template>
<div class="company">
        <div class="container">
            <router-link class="company__nav-first" aria-current="page" :to="headerMenuList[0].path">Home</router-link>
            <router-link class="company__nav-last" aria-current="page" :to="headerMenuList[1].path">About Us</router-link>
            <h2 class="company__title">About <strong>Our Company</strong></h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="company__image">
                        <img src="../../assets/images/aboutUs/pic.png" alt="">
                    </div>
                </div>
                <div class="col-md-6">
                    <p class="company__text">Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. 
                        Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. 
                        Proin umcorper urna et felisstibulum iaculis lacinia est. 
                        Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. 
                        Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. 
                        Lorem ipsum dolor sitamet, consetetur sadipscing elitr.
                    </p>
                    <p class="company__text">
                        Agent info ipsum dolor sit amet, consectetuer adipiscing elit, 
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                        Ut wisi enim ad minim veniam, quis nostrud tation ullamcorper suscipit lobortis nisl ut 
                        aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                        Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                        magna aliquam erat volutpat nostrud tation ullamcorper nonummy nibh.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        headerMenuList: {
            type: Array,
            default: () => [],
        }
    }
}
</script>
