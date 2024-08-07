import {ref, computed, onMounted} from 'vue'
import {defineStore} from 'pinia'

export const useWeatherStore = defineStore('weatherStore', () => {
    const weather = ref([]);
    const getWeather = async () => {
        try {
            const response = await fetch('http://api.worldweatheronline.com/premium/v1/weather.ashx?key=a0ecb00139a04137a38130009240708&q=Iran&format=json&num_of_days=1');
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const dataWeather = await response.json();
            const data = dataWeather?.data;
            console.log(data.current_condition[0].humidity)
            weather.value.push({
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
    return {weather}
})
