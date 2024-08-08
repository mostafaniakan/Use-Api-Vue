import {onMounted, ref, watch} from 'vue'
import {defineStore} from 'pinia'

export const useWeatherStore = defineStore('weatherStore', () => {
    const weather = ref([]);
    const city = ref('City Name');
    const loader=ref(false);

    const getWeather = async (city = "Iran") => {
        loader.value=true;
        try {
            const response = await fetch(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=a0ecb00139a04137a38130009240708&q=${city}&format=json&num_of_days=1`);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const dataWeather = await response.json();
            const data = dataWeather?.data;
            if (weather.value.length === 0) {
                weather.value.push({
                    "city": data.request[0].query,
                    "temp_C": data.current_condition[0].temp_C,
                    "weatherDesc": data.current_condition[0].weatherDesc[0].value,
                    "humidity": data.current_condition[0].humidity
                })
            } else {
                console.log(weather.value[0] = {
                    "city": data.request[0].query,
                    "temp_C": data.current_condition[0].temp_C,
                    "weatherDesc": data.current_condition[0].weatherDesc[0].value,
                    "humidity": data.current_condition[0].humidity
                })
            }
            loader.value=false;
        } catch (error) {
            console.error('Error:', error);
            loader.value=false;
        }
    }

    function cityHandler() {
        weather.value = [];
        getWeather(city.value);
    }

    onMounted(() => {
        getWeather();
    })
    return {weather, city, cityHandler,loader}
})
