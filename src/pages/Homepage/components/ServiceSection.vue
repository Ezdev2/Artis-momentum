<template>
    <div class="sm:py-[122px] p-[24px] sm:px-[122px] flex flex-col gap-6 justify-center bg-black">
        <div class="flex flex-col gap-2">
            <p class="font-bold text-blackScale text-left uppercase">Découvrez notre approche pédagogique
            </p>
            <h2 class="font-bold text-left text-white">Les formations commerciales intra et inter,
                à distance ou en présentiel, adaptées à votre organisation
            </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="service-card flex flex-col gap-4  bg-white rounded-lg p-6 transition-all hover:bg-gray-700 hover:shadow-lg"
                v-for="(item, index) in data" :key="index">
                <Icon class="h-8 w-8" :icon="item.icon" />
                <div class="flex flex-col gap-8">
                    <h4 class="text-left font-semibold mb-6 leading-tight">{{ item.title }}</h4>
                    <button
                        class="flex gap-4 justify-center items-center text-center px-6 py-3.5 text-white glassMorphism hover:bg-secondary"
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
import { useRouter } from "vue-router";

const router = useRouter();

const data = [
    {
        icon: "mdi:company",
        title: "Grandes entreprises",
        link: "/service"
    },
    {
        icon: "mingcute:house-line",
        title: "PME",
        link: "/service"
    },
    {
        icon: "heroicons:fire",
        title: "Start-ups",
        link: "/service"
    },
    {
        icon: "uil:user",
        title: "Commerciaux",
        link: "/service"
    },
]

function goTo(link) {
    router.push(link)
}
</script>

<style lang="scss" scoped>
.service-card {
    position: relative;
    background: var(--color-secondary);
    color: white;
}

.service-card::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(85.12deg, #FF6F20 -33.54%, #C75B00 24.17%, #8A3B00 99.96%);
    z-index: -1;
    border-radius: inherit;
}
</style>