<template>
    <div class="team">
        <div class="container">
            <div class="team__info">
                <h3 class="team__title">Our <strong>Team</strong></h3>
                <router-link to="/faq" class="team__faq">Want to be a part of this team?</router-link> 
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6"  v-for="(item, index) in teamData" :key="index">
                    <div class="person">
                        <img :src="require(`../../assets/images/aboutUs/person${item.image}`)" :alt="item.fullName" class="person__image">
                        <h4 class="person__name">{{ item.fullName }}</h4>
                        <p class="person__text">{{ item.position }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        teamData: {
            type: Array,
            default: () => [],
        },
    },
}
</script>
