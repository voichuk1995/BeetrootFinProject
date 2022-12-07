<template>
	<nav class="navbar navbar-expand-lg navbar-light p-0">
		<div class="container">
			<a class="navbar-brand logo" href="/">
				<img src="../assets/images/icons/logo.png" alt="logo">
			</a>
			<div class="collapse collapse-fontsize navbar-collapse" :class="burgerState ? 'mobile': ''" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0 mobile__list">
					<li class="nav-item menu-link mobile__list-item" v-for="(menu, index) in headerMenuList" :key="index">
						<router-link class="nav-link active" aria-current="page" :to="menu.path" @click="burgerState = !burgerState">{{ menu.name }}</router-link>
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
			<div class="burger">
            	<span class="burger__line" :class="burgerState ? 'open-burger': ''" @click="burgerState = !burgerState"></span>
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
			burgerState: false,
		}
	},
};
</script>

<style lang="scss">
@import "../assets/layouts/index";

.navbar{
	height: 90px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 1, 0.2);
	width: 100%;
	position: fixed;
	z-index: 10;
	background-color: #fff;
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

.burger{
    width: 40px;
    height: 25px;
    display: none;
    position: relative;
    z-index: 11;
  
    &__line{
		display: block;
		width: 40px;
		background-color: $dark;
		height: 2px;
		position: relative;
		transition: all ease .4s;
		position: absolute;
		top: 10px;
  
		&::after{
			content: "";
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: $dark;
			left: 0;
			top: -10px;
		}
  
		&::before{
			content: "";
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: $dark;
			left: 0;
			bottom: -10px;
		}
    }
  
    &__line.open-burger{
      	transform: rotate(45deg);
        
		&::after{
			transform: rotate(-90deg);
			top: 0;
		}
  
		&::before{
			display: none;
		}
	}

	@media screen and (max-width: 992px){
            display: block;
    }
}

@media screen and (max-width: 992px){
    .collapse:not(.show).mobile {
		display: flex!important;
		justify-content: center;
	}
	
	.mobile{
		position: fixed;
		left: 0;
		top: 0;
		background-color: #fff;
		height: 100%;
		width: 100%;
		z-index: 10;

		&__list{
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			height: 100%;
			justify-content: center;
			
			&-item {
				background: #fff;
				position: relative;	

				&::before {
					content: "";
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translate(-50%);
					height: 2px;
					width: 40px;
					background-color: $grey4;

				}

				&:last-child{
						
					&::before{
						height: 0;
					}
				}
			}
		}

		.nav-link{
			font-size: 35px;
		}

		.icons {
			display: none;
		}
	}
}

</style>
