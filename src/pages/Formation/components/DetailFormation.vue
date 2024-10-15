<template>
    <div class="bg-transparent px-[122px] pt-[80px] flex flex-col gap-4 overflow-hidden relative">
        <!-- Breadcrumb Section -->
        <div>
            <p class="text-left text-white">
                <a href="/formation">
                    Listes des formations 
                </a>
                / <span class="font-bold">{{ data.title }}</span>
            </p>
        </div>
        
        <!-- Banner Image Section -->
        <div class="banner-container h-[400px] w-full mb-[20px]">
            <img :src="data.img" alt="" class="object-cover w-full h-full">
        </div>
        
        <!-- Title and Description -->
        <div class="flex flex-col gap-4">
            <h2 class="text-left linearBg font-bold">{{ data.title }}</h2>
            <p class="text-left text-white">{{ data.description }}</p>
        </div>
        
        <!-- Content Section -->
        <div class="mt-[44px]">
            <p class="text-white text-left">
                {{ data.content }}
            </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: { type: Object, default: {} }
});
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
