<script setup>

import {useWeatherStore} from "@/stores/StoreWeather.js";
import Card from "@/components/Card.vue";
import Dropdown from "@/components/Dropdown.vue";
import {storeToRefs} from "pinia";
import ShowSun from "@/components/ShowSun.vue";

const weatherStore = useWeatherStore();

const {
    weather,
} = storeToRefs(weatherStore)
</script>

<template>
    <main>
        <h1>Home</h1>
        <Dropdown/>
        <Card :weatherItems="weather"/>
        <ShowSun/>
    </main>
</template>
<script>

</script>