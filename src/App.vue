<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import {onMounted, ref} from "vue";

import {useWeatherStore} from "@/stores/StoreWeather.js";
const weatherStore = useWeatherStore();
const weather = weatherStore.weather;

</script>

<template>
    {{weather}}
    <HomeView/>
</template>

<style scoped>

</style>
