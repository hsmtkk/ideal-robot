<script setup lang="ts">
import type {City} from "@/interfaces"

const cityList = useState<Map<number, City>>("cityList")
</script>

<template>
    <section>
        <h2>City list</h2>
        <li
        v-for="[id, city] in cityList"
        v-bind:key="id"
        ><NuxtLink v-bind:to="{name: 'WeatherInfo-id', params:{id:id}}">Weather of {{ city.name }}</NuxtLink></li>
    </section>
</template>
