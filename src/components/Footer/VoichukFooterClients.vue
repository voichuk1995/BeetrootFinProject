<template>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <h3 class="footer__title">For clients</h3>
        <ul class="footer__list">
            <li  v-for="(menu, index) in footerMenuClients" :key="index">
                <router-link class="footer__link" aria-current="page" :to="menu.path">{{ menu.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
	props: {
		footerMenuClients: {
            type: Array,
            required: true, 
        },
	},
}
</script>
