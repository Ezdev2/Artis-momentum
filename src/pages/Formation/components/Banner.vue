<template>
    <div class="md:h-[100vh] bg-transparent pt-[24px] md:pt-[80px] overflow-hidden relative">
        <div class="flex gap-4 justify-between">
            <div class="md:w-1/2 flex flex-col gap-4">
                <p class="font-bold text-blackScale text-left uppercase">Améliorez les performances de vos équipes commerciales
                </p>
                <h2 class="text-left linearBg font-bold">Nos programmes de formation pour booster vos ventes</h2>
                <p class="text-left text-white">Artis est le leader incontournable de la formation aux métiers de la vente, choisi par plus de 2000 clients pour stimuler durablement leur croissance.
                </p>
                <button
                    class="flex gap-4 justify-center items-center text-center px-6 py-3.5 text-white linear hover:bg-secondary max-w-[300px]"
                    @click="showDetail">
                    <span>Commencer maintenant</span>
                    <img width="12" src="../../../assets/arrow.svg" alt="">
                </button>
            </div>
            <div class="video-container hidden md:flex">
                <video class="rounded-[16px]" width="800" height="600" autoplay loop>
                    <source src="https://videos.pexels.com/video-files/3129424/3129424-uhd_2560_1440_24fps.mp4"
                        type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(['showDetail']);
const props = defineProps({
    data: { type: Object, default: {} }
});

function showDetail() {
    emit('showDetail')
}
</script>
<style scoped>
.video-container::before {
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
.video-container {
    width: 650px;
    height: 500px;
    position: relative;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    padding: 4px;
    border-radius: 20px;
    transform: rotate(5deg);
}
video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
</style>