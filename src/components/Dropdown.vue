<script setup>
import {ref} from "vue";

import {storeToRefs} from "pinia";
import {useWeatherStore} from "@/stores/StoreWeather.js";
const weatherStore = useWeatherStore();
const cityHandler = weatherStore.cityHandler
const {
    city,
} = storeToRefs(weatherStore)

</script>

<template>
    <select  class="dropdown" v-model="city" @change="cityHandler" >
        <option style="display: none"> City Name </option>
        <option  value="London"> London </option>
        <option  value="Iran"> Iran </option>
        <option  value="Usa"> Usa </option>
        <option  value="Ankara"> Ankara </option>
    </select>
</template>

<style scoped>

</style>