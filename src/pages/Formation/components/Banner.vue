<template>
    <div class="h-[50vh] bg-transparent px-[122px] pt-[80px] overflow-hidden relative">
        <div class="flex gap-4 justify-between">
            <div class="w-1/2 flex flex-col gap-4">
                <h2 class="text-left linearBg font-bold">L'agence spécialiste de la vente.</h2>
                <p class="text-left text-white">Nous vous aidons à résoudre ce qui freine votre performance commerciale
                    :
                    recrutement de bons commerciaux, formation des équipes, audit, modernisation des méthodes de vente
                    et du CRM.</p>
                <button
                    class="flex gap-4 justify-center items-center text-center px-6 py-3.5 text-white linear hover:bg-secondary max-w-[300px]"
                    @click="goTo('/formation')">
                    <span>Commencer maintenant</span>
                    <img width="12" src="../../../assets/arrow-black.svg" alt="">
                </button>
            </div>
            <div class="video-container">
                <video class="rounded-[16px]" width="800" height="600" autoplay loop>
                    <source src="https://videos.pexels.com/video-files/3129424/3129424-uhd_2560_1440_24fps.mp4"
                        type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</template>
<script setup>
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
    display: flex;
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