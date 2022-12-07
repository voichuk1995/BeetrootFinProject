<template>
    <div class="subscribe">
        <div class="container">
            <div class="row subscribe__content">
                <div class="col-12">
                    <h2 class="subscribe__title">
                        Subscribe To <strong>Our Newsletter</strong>
                    </h2>
                </div>
                <div class="col-12">
                    <!-- <input type="email" class="subscribe__email" placeholder="Your email..."> -->


                    <input 
                        class="subscribe__email"
                        placeholder="Your email..." 
                        v-model="email" 
                        required 
                        type="email"
                    >
                </div> 
                <div class="col-12">
                    <button v-on:click="onSubmit()" class="subscribe__link">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import email from "../../data/data.all";

export default {
    // data(){
    //     return {
    //         // email: email,
    //     }
    // },
    // methods: {
    //     // validateEmail(input) {
    //     //     return !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(input.value);
    //     // },
    //     // pushEmailToSubscribe(){


    //     //     if(this.validateEmail){
    //     //         this.email.push(value);
    //     //     };
    //     //     console.log(this.email);
    //     // },
    // },





    // data() {
    //     return {
    //         email: "",
    //     }
    // },
    // methods: {
    //     onSubmit(event) {
    //     event.preventDefault()
    //     console.log(event)
    // },
    // validateEmail(email) {
    //     if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email)) {
    //         return
    //     } else {
    //         alert("Email invalid!")
    //     }
    // }
    // },
    // watch: {
    //     email(value){
    //     this.email = value;
    //     this.validateEmail(value);
    //     }
    // },
}
</script>
