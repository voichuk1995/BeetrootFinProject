<template>
	<nav class="navbar navbar-expand-lg navbar-light p-0">
		<div class="container">
			<a class="navbar-brand logo" href="/">
				<img src="../assets/images/icons/logo.png" alt="logo">
			</a>
			<div class="collapse collapse-fontsize navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item menu-link" v-for="(menu, index) in headerMenuList" :key="index">
					<router-link class="nav-link active" aria-current="page" :to="menu.path">{{ menu.name }}</router-link>
				</li>
			</ul>
			<div class="icons">
				<a href="#" target="_blank">
					<img src="../assets/images/icons/f.png" alt="fb">
				</a>
				<a href="#" target="_blank">
					<img src="../assets/images/icons/p.png" alt="p">
				</a>
				<a href="#" target="_blank">
					<img src="../assets/images/icons/inst.png" alt="inst">
				</a> 
				<a href="#" target="_blank">
					<img src="../assets/images/icons/g+.png" alt="google"> 
				</a>
			</div>
			</div>
		</div>
	</nav>
</template> 

<script>
import { menuList } from "../constants/menuLinks";

export default {
	name: "voichukHeader",
	props: {
		msg: String, 
	},
	data() {
		return {
			headerMenuList: menuList,
		}
	},
};
</script>

<style lang="scss">
@import "../assets/layouts/index";

.navbar{
	height: 90px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 1, 0.2);
}
.navbar-nav{
	height: 90px;
}
.logo{
	padding-right: 180px;

	@media screen and (max-width: 1399px){
		padding-right: unset;
	}
	@media screen and (max-width: 1200px){
		padding-right: 30px;
	}
	
}
.collapse-fontsize{
	font-size: 18px;
}
.menu-link{
	padding: 25px 30px;
	transition: all ease .4s;

	&:hover{
		background-color: $grey;
	}

	@media screen and (max-width: 1200px){
		padding: 25px 10px;
	}
}

.icons{
	a{
		width: 30px;
		height: 30px;
		text-align: center;
		border: 1px solid $grey;
		border-radius: 50%;
		margin-right: 10px;
		display: inline-block;
	}
}
</style>
