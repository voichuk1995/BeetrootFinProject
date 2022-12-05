<template>
    <div class="container">
        <div class="row">
            <div class="started">
                <div class="col-md-10">
                <h2 class="started__title">
                    Get Started on Buying Your <strong>New Home</strong>
                </h2>
                </div>
                <div class="col-md-2">
                    <router-link class="started__link" aria-current="page" :to="headerMenuList[1].path">MORE ABOUT US</router-link>
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
