<script setup>
import {ref, watch} from "vue";
const props = defineProps(['weatherItems']);

import {useWeatherStore} from "@/stores/StoreWeather.js";
import {storeToRefs} from "pinia";
const weatherStore = useWeatherStore();
const {
    loader,
} = storeToRefs(weatherStore)
</script>

<template>
<div class="card">
    <div>
        {{loader}}
        <div v-if="loader"><img style="width: 50px;" src="/images/loader.svg" alt=""></div>
        <div v-else v-for="weatherItem in props.weatherItems"  class="items" >
            <div class="item">
                <span>City : </span>{{weatherItem.city}}
            </div>
            <div class="item">
                <span>Temp_C : </span>{{weatherItem.temp_C}} °c
            </div>
            <div class="item">
                <span>WeatherDesc : </span>{{weatherItem.weatherDesc}}
            </div>
            <div class="item">
                <span>Humidity : </span>{{weatherItem.humidity}}
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>