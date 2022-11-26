<template>
    <VoichukMainContainer>
        <template v-slot:header>
            <VoichukHeader />
        </template>
        <main>
            <router-view />
        </main>
        <template v-slot:footer>
            <VoichukFooter />
        </template>
    </VoichukMainContainer>
</template>

<script>
import VoichukHeader from "./components/VoichukHeader.vue";
import VoichukFooter from "./components/Footer/VoichukFooter.vue";
import VoichukMainContainer from "./components/VoichukMainContainer.vue";


export default {
    components: {
        VoichukHeader,
        VoichukFooter,
        VoichukMainContainer,
    },
}
</script>
