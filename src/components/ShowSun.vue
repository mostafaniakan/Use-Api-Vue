<script setup>
const now = new Date();
const hours = now.getHours();
const isDayTime = hours > 6 && hours < 20;
const position = (hours / 24) * 300;
</script>

<template>

        <div class="sky">
            <div class="location">
                <span>Morning</span>
                <span>Noon</span>
                <span>Night</span>
            </div>
            <div style="position: relative">
                <div class="line">
                </div>
                <div class="dayTime" :style="{transform: `translateX(${position}px)`}">
                    <div v-if="isDayTime">
                        <img src="/images/sun.svg" alt="Sun">
                    </div>
                    <div v-else>
                        <img src="/images/moon.svg" alt="Moon">
                    </div>
                </div>
            </div>
        </div>


</template>

<style scoped>
.sky{
    width: 300px;
    position: relative;
    margin-top: 24px;
}
.line{
    width: 100%;
    position: absolute;
    top: 50%;
    z-index: -1;
    margin-top: -2px;
    height: 4px;
    background: #4AE4FF;
    border-radius: 5px;
}
.dayTime img{
    width: 32px;
}
.location{
    display: flex;
    justify-content: space-between;
}
</style>
