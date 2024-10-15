<template>
    <div class="h-[50vh] bg-transparent px-[122px] pt-[80px] overflow-hidden relative">
        <div class="flex gap-4 justify-between">
            <div class="w-1/2 flex flex-col gap-4">
                <h2 class="text-left linearBg font-bold">L'agence spécialiste de la vente.</h2>
                <p class="text-left text-white">Nous vous aidons à résoudre ce qui freine votre performance commerciale
                    :
                    recrutement de bons commerciaux, formation des équipes, audit, modernisation des méthodes de vente
                    et du CRM.</p>
            </div>
            <div class="banner-container">
                <img  height="200" src="https://images.pexels.com/photos/9443526/pexels-photo-9443526.jpeg?auto=compress&cs=tinysrgb&w=560&h=560&dpr=1" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>

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
    width: 650px;
    height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    border-radius: 20px;
}
</style>