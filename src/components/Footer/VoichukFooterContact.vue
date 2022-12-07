<template>
    <div class="col-lg-3 col-md-12 col-sm-12">
        <h3 class="footer__title">Contact us</h3>
        <ul class="footer__list">
            <li>
                <router-link class="footer__link" aria-current="page" :to="footerMenuList[4].path">240 Central Park, London OR 10019</router-link>
            </li>
            <li>
                <p>Nunber:
                    <a href="tel:+380999999999" class="footer__link">+380999999999</a>
                </p>
            </li>
            <li>
                <a href="mailto:info@realhome.com" class="footer__link footer__link_red">info@realhome.com</a>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        footerMenuList: {
            type: Array,
            default: () => [],
        }
    }
}
</script>
