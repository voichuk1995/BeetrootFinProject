<template>
    <VoichukPropertiesCatalog :propertiesData="propertiesData"/>
</template>

<script>
import VoichukPropertiesCatalog from "../components/VoichukPropertiesCatalog.vue";

import { propertiesData } from "../data/data.all";

export default {
    name: "VoichukProperties",
    components: {
        VoichukPropertiesCatalog,
    },
    data() {
        return {
            propertiesData: propertiesData,
        }
    }  
}
</script>
