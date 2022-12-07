<template>
    <div class="subscribe">
        <div class="container">
            <div class="row subscribe__content">
                <div class="col-12">
                    <h2 class="subscribe__title">
                        Subscribe To <strong>Our Newsletter</strong>
                    </h2>
                </div>
                <div v-if="!submitted">
                    <div class="col-12">
                        <input 
                            v-model="email"
                            v-bind:class="{'subscribe__email':true, 'is-invalid' : !validEmail(email) && emailBlured}"
                            v-on:blur="emailBlured = true"
                            placeholder = "Your Email address...">
                        <div class="invalid-feedback">A valid email is required</div>           
                    </div> 
                    <div class="col-12">
                        <button v-on:click.stop.prevent="submit" class="subscribe__link">SUBSCRIBE</button>
                    </div>
                </div>
                <div v-else class="alert alert-success" role="alert">
                    <h5>Thank you</h5>
                    <p>Your email: <strong>{{ this.email }}</strong> validation was a success!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            email : "", 
            emailBlured : false,
            valid : false, 
            submitted : false
        }
    },
    methods : {
        validate(){
        this.emailBlured = true;
        if( this.validEmail(this.email)){
            this.valid = true;
        }
        },
        validEmail(email) {
            let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            return re.test(email.toLowerCase());
        },
        submit(){                   
            this.validate();     
            if(this.valid){
            
            this.submitted = true;
            }
        }
    }
}
</script>
