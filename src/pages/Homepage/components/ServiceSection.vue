<template>
    <div class="py-[122px] px-[24px] sm:px-[122px] bg-primary flex flex-col gap-6 justify-center items-cente">
        <div class="flex flex-col gap-2">
            <p class="font-bold text-secondary text-left uppercase">Découvrez notre approche pédagogique
            </p>
            <h2 class="font-bold text-left text-white">Les formations commerciales intra et inter,
                à distance ou en présentiel, adaptées à votre organisation
            </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white rounded-lg p-6 transition-all hover:bg-gray-700 hover:shadow-lg" v-for="(item, index) in data" :key="index">
                <Icon class="h-8 w-8" :icon="item.icon" />
                <div class="flex flex-col gap-8">
                    <h4 class="text-left font-semibold mb-6 leading-tight">{{ item.title }}</h4>
                    <button
                        class="flex gap-4 justify-center items-center text-center px-6 py-3.5 text-white bg-[#3a3a3a] hover:bg-secondary"
                        @click="goTo(item.link)">
                        <span>Découvrir</span>
                        <img width="12" src="../../../assets/arrow.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { Icon } from '@iconify/vue';

const data = [
    {
        icon: "mdi:company",
        title: "Grandes entreprises",
        link: "/"
    },
    {
        icon: "mingcute:house-line",
        title: "PME",
        link: "/"
    },
    {
        icon: "heroicons:fire",
        title: "Start-ups",
        link: "/"
    },
    {
        icon: "uil:user",
        title: "Commerciaux",
        link: "/"
    },
]

function goTo(link) {
    console.log(link);
}
</script>

<style lang="scss" scoped></style>