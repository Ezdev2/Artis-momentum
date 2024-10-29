<template>
    <div class="p-[24px] flex flex-col md:flex-row gap-24 justify-center">
        <div class="flex flex-col gap-2 w-full md:w-1/2">
            <p class="font-bold text-blackScale text-left uppercase">Télécharger un Livre blanc
            </p>
            <h2 class="font-bold text-left text-white">
                {{ databook.title }}
            </h2>
            <p class="text-left text-white">
                {{ databook.description }}
            </p>
            <div class="flex gap-2 flex-col md:flex-row">
                <button class="flex gap-2 items-center justify-center text-center px-6 py-3.5 bg-primary text-white"
                    @click="goTo('/cta')">
                    <Icon icon="radix-icons:download" />
                    <span>
                        Télécharger ce livre
                    </span>
                </button>
                <button class="text-center px-6 py-3.5 bg-[#fff] text-primary" @click="goTo('/formation')">
                    Voir les formations
                </button>
            </div>
        </div>
        <div class="h-[600px] md:w-[400px] bg-cover bg-center bg-no-repeat rounded-[16px]"
        :style="{ backgroundImage: 'url(' + databook.img + ')' }">
        </div>

    </div>

</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    databook: { type: Object, default: {} }
});

const router = useRouter();

function goTo(link) {
    router.push(link)
}
</script>

<style lang="scss" scoped></style>