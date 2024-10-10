<template>
    <div class="h-[50vh] bg-primary px-[122px] pt-[80px] overflow-hidden relative">

        <div class="flex gap-4 justify-between">
            <div class="w-1/2 flex flex-col gap-4">
                <h2 class="text-left text-white font-bold">L'agence spécialiste de la vente.</h2>
                <p class="text-left text-white">Nous vous aidons à résoudre ce qui freine votre performance commerciale
                    :
                    recrutement de bons commerciaux, formation des équipes, audit, modernisation des méthodes de vente
                    et du CRM.</p>
                <button
                    class="flex gap-4 justify-center items-center text-center px-6 py-3.5 text-blackScale bg-white hover:bg-secondary max-w-[300px]"
                    @click="goTo('/formation')">
                    <span>Commencer maintenant</span>
                    <img width="12" src="../../../assets/arrow-black.svg" alt="">
                </button>
            </div>
            <div class="video-container">
                <video width="800" height="600" autoplay loop>
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
.video-container {
    width: 650px;
    height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background: transparent;
    border: 4px solid var(--color-secondary);
    clip-path: polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%);
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