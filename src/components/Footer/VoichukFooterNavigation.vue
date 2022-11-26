<template>
    <div class="col">
        <h3 class="footer__title">Navigation</h3>
        <ul class="footer__list">
            <li  v-for="(menu, index) in footerMenuList" :key="index">
                <router-link class="footer__link" aria-current="page" :to="menu.path">{{ menu.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
	props: {
		footerMenuList: {
            type: Array,
            required: true, 
        },
	},
}
</script>
