<template>
    <footer class="footer footer_bg ">
        <div class="container">
            <div class="row">
                <VoichukFooterIcons />
                <VoichukFooterNavigation :footerMenuList = "footerMenuList" />
                <VoichukFooterClients :footerMenuClients = "footerMenuClients" />
                <VoichukFooterContact />
            </div>
        </div>
    </footer>
</template>

<script>
import { menuList, menuClients } from "../../constants/menuLinks";

import VoichukFooterIcons from "./VoichukFooterIcons";
import VoichukFooterNavigation from "./VoichukFooterNavigation";
import VoichukFooterClients from "./VoichukFooterClients";
import VoichukFooterContact from "./VoichukFooterContact";

export default {
    name: "voichukFooter",
	props: {
		msg: String, 
	},
    components: {
        VoichukFooterIcons,
        VoichukFooterNavigation,
        VoichukFooterClients,
        VoichukFooterContact,
    }, 
    data() {
        return {
            footerMenuList: menuList,
            footerMenuClients: menuClients,
        }
    },
}
</script>
