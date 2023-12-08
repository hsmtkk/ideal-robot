<script setup lang="ts">
import type { City } from "@/interfaces"

useState<Map<number, City>>("cityList", (): Map<number, City> => {
    const cityListInit = new Map<number, City>()
    const osaka = 1853909
    const kobe = 1859171
    const himeji = 1862627
    cityListInit.set(osaka, { id: osaka, name: "大阪", q: "Osaka" })
    cityListInit.set(kobe, { id: kobe, name: "神戸", q: "Kobe" })
    cityListInit.set(himeji, { id: himeji, name: "姫路", q: "Himeji" })
    return cityListInit
})
</script>

<template>
    <header>
        <h1>Sample using useLazyAsyncData</h1>
    </header>
    <main>
        <NuxtPage />
    </main>
</template>
