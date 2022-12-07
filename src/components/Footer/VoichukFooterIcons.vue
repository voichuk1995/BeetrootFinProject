<template>
    <div class="col-lg-3 col-md-12 col-sm-12">
        <div class="footer__logo">
            <img class="footer__img" src="../../assets/images/icons/footer-logo.png" alt="footer-logo">
        </div>
        <ul class="footer__socials">
            <li class="footer__social">
                <a href="#" target="_blank">
                    <img src="../../assets/images/icons/f.png" alt="">
                </a>
            </li>
            <li class="footer__social">
                <a href="#" target="_blank">
                    <img src="../../assets/images/icons/p.png" alt="">
                </a>
            </li>
            <li class="footer__social">
                <a href="#" target="_blank">
                    <img src="../../assets/images/icons/inst.png" alt="">
                </a>
            </li>
            <li class="footer__social">
                <a href="#" target="_blank">
                    <img src="../../assets/images/icons/g+.png" alt="">
                </a>
            </li>
        </ul>        
    </div>
</template>

<script>
export default {
    name: "voichukFooterIcons",
	props: {
		msg: String, 
	},
}
</script>
