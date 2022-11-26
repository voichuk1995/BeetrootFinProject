<template>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active carusel-button" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="carusel-button" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="carusel-button" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" class="carusel-button" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/images/slide.jpg" class="d-block w-100" alt="">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="hero__title">120 Anastasia Avenue, Coral Gables</h5>
                    <div class="hero__content">
                        <p class="hero__text">$625,000</p>
                        <a href="#" class="hero__link">MORE INFO</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/images/slide.jpg" class="d-block w-100" alt="">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="hero__title">120 Anastasia Avenue, Coral Gables</h5>
                    <p class="hero__text">$625,000</p>
                    <a href="#" class="hero__link">MORE INFO</a>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/images/slide.jpg" class="d-block w-100" alt="">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="hero__title">120 Anastasia Avenue, Coral Gables</h5>
                    <p class="hero__text">$625,000</p>
                    <a href="#" class="hero__link">MORE INFO</a>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/images/slide.jpg" class="d-block w-100" alt="">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="hero__title">120 Anastasia Avenue, Coral Gables</h5>
                    <p class="hero__text">$625,000</p>
                    <a href="#" class="hero__link">MORE INFO</a>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style lang="scss">
.carusel-button{
    width: 12px!important;
    height: 12px!important;
    background-color: transparent!important;
    border-radius: 50%!important;
    border: 2px solid #FFFFFF!important;
    margin: 0 5px!important;
}
.carousel-indicators .active{
    background-color: #fff!important;
}
.carousel-caption{
    padding-bottom: 2.25rem;
}
.carousel-indicators{
    bottom: 280px;
}
.hero__title{
    font-size: 48px;
    font-weight: bold;
    font-family: "Raleway";
    padding-bottom: 40px;
    margin: 0;
}
.hero__content{
    display: flex;
    align-items: center;
    justify-content: center;
}
.hero__text{
    font-size: 36px;
    font-family: "Helvetica";
    display: inline-block;
    padding-right: 35px;
}
.hero__link{
    text-decoration: none;
    padding: 10px 15px;
    background-color: rgba(255, 255, 255, .5);
    color: #3c3c3c;
    font-weight: bold;
    font-size: 16px;
    display: inline-block;
    transition: all ease .4s;
    border-radius: 6px;
    
    &:hover{
        background-color: rgba(255, 255, 255, 1);
        color: #3c3c3c;
    }
}
</style>
