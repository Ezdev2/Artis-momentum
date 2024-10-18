<template>
    <div class="bg-transparent p-[24px] lg:px-[122px] pt-[80px] md:grid grid-cols-3 gap-8">
        <div class="col-span-2 flex flex-col gap-4 overflow-hidden relative">
            <!-- Breadcrumb Section -->
            <div class="w-full flex gap-2 justify-between items-center">
                <p class="text-left text-white">
                    <a href="/formation">
                        Listes des formations
                    </a>
                    / <span class="font-bold">{{ data.title }}</span>
                </p>
                <div>
                    <button class="flex gap-2 items-center justify-center text-center px-4 py-2 linear text-white"
                        @click="goTo('/cta')">
                        <Icon icon="radix-icons:download" />
                        <span class="hidden lg:block">
                            Télécharger le PDF
                        </span>
                    </button>
                </div>
            </div>

            <!-- Banner Image Section -->
            <div class="banner-container h-[150px] md:h-[400px] w-full mb-[20px]">
                <img :src="data.img" alt="" class="object-cover w-full h-full">
            </div>

            <!-- Title and Description -->
            <div class="flex flex-col gap-4">
                <!-- <h2 class="text-left linearBg font-bold">{{ data.title }}</h2> -->
                <div class="flex justify-between items-center w-full mb-6 ">
                    <h2 class="text-left linearBg font-bold">{{ data.title }}</h2>
                    <div class="flex items-center">
                        <template v-for="star in getStars(data.rating)" :key="star.index">
                            <Icon :icon="star.icon" width="24" height="24" :style="{ color: star.color }" />
                        </template>
                    </div>
                </div>
                <p class="text-left text-white">{{ data.description }}</p>
            </div>

            <!-- Content Section -->
            <div class="mt-[44px]">
                <p class="text-white text-left">
                    {{ data.content }}
                </p>
            </div>

            <hr class="text-blackScale">

            <Form />

        </div>

        <!-- Ici section News (financement / avis / certifications ) -->
        <Sidebar />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
import Sidebar from '../../../components/Layouts/Sidebar.vue';
import Form from '../../../components/Common/Form.vue';

const router = useRouter();

const props = defineProps({
    data: { type: Object, default: {} }
});

// Function to get the stars based on the rating
const getStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push({ icon: "noto:star", color: "yellow", index: i });  // Colored star
        } else {
            stars.push({ icon: "bi:star-fill", color: "white", index: i });  // Uncolored star
        }
    }
    return stars;
}

function goTo(link) {
    router.push(link)
}
</script>

<style scoped>
.banner-container::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(85.12deg, #61285b -33.54%, #251e51 24.17%, #021a70 99.96%);
    z-index: -1;
    border-radius: 16px;
}

.banner-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    border-radius: 20px;
    overflow: hidden;
}
</style>
