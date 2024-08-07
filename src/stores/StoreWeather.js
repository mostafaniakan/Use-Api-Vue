import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useWeatherStore = defineStore('weatherStore', () => {
    const weather = ref([]);

    return {weather}
})
