<template>
    <div class="about">
        <VoichukOurCompany :headerMenuList="headerMenuList"/>
    </div>
    <VoichukFeauters :data="feautersData"/>
    <VoichukOurTeam :teamData="teamData"/>
    <VoichukSubscribe />
</template>

<script>
import { feautersData, teamData } from "../data/data.all";
import { menuList } from "../constants/menuLinks";

import VoichukOurCompany from "../components/AboutUs/VoichukOurCompany.vue"
import VoichukFeauters from "../components/VoichukFeauters.vue"
import VoichukOurTeam from "../components/AboutUs/VoichukOurTeam.vue"
import VoichukSubscribe from "../components/AboutUs/VoichukSubscribe.vue"

export default {
    name: "VoichukAbout",
    components: {
        VoichukOurCompany,
        VoichukFeauters,
        VoichukOurTeam,
        VoichukSubscribe,
    },
    data() {
        return {
            feautersData: feautersData,
            teamData: teamData,
            headerMenuList: menuList,
        }
    }  
}
</script>
