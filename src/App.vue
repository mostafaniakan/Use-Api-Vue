<script setup>
import HomeView from "@/views/HomeView.vue";
import {onMounted, ref} from "vue";

import {useWeatherStore} from "@/stores/StoreWeather.js";
import {storeToRefs} from "pinia";
// const weatherStore = useWeatherStore();
// const weather = weatherStore.weather
// const {
//     weather,
// } = storeToRefs(weatherStore)
const getWeather = async () => {
    try {
        const response = await fetch('http://api.worldweatheronline.com/premium/v1/weather.ashx?key=a0ecb00139a04137a38130009240708&q=Iran&format=json&num_of_days=1');
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const dataWeather = await response.json();
        const data = dataWeather?.data;
        weather.push({
            "city": data.request[0].query,
            "temp_C": data.current_condition[0].temp_C,
            "weatherDesc": data.current_condition[0].weatherDesc[0].value,
            "humidity": data.current_condition[0].humidity
        })
    } catch (error) {
        console.error('Error:', error);
    }
}

onMounted(() => {
    getWeather();
})
function test() {
    weather.push({
        "city": 1,
        "temp_C": 2,
        "weatherDesc": 3,
        "humidity": 4
    })
}
</script>

<template>
    <button @click="test"></button>
    {{weather}}
    <HomeView/>
</template>

<style scoped>

</style>
