<template>
    <div class="py-[122px] px-[24px] sm:px-[122px] flex flex-col lg:flex-row gap-6 justify-center relative">
        <div class="line">
            <img width="860px" src="../../../assets/animated-bull.svg" alt="" />
        </div>
        <div class="flex flex-col gap-4 lg:w-1/3">
            <p class="font-bold text-left text-blackScale uppercase">Présentiel et en ligne
            </p>
            <h3 class="font-bold text-left linearBg">14 programmes de formations commerciales pour booster votre
                équipe
            </h3>
            <p class="text-white text-left">Trouvez la bonne formation, adaptée à votre besoin, votre secteur
                d'activité et votre métier : Commercial(e) terrain, Key Account Manager (KAM), Directeur(trice)
                Commercial(e)...
            </p>
            <button
                class="flex gap-4 justify-center items-center text-center px-6 py-3.5 text-white linear hover:bg-secondary w-1/2"
                @click="goTo('/formation')">
                <span>Tout voir</span>
                <img width="12" src="../../../assets/arrow.svg" alt="">
            </button>
        </div>
        <div class="flex flex-col gap-4 lg:w-2/3">
            <div class="flex gap-8 justify-between items-center glassMorphism rounded-lg p-6 transition-all border border-gray hover:border-secondary hover:border-2 hover:bg-gray-700 hover:shadow-lg"
                v-for="(item, index) in data" :key="index">
                <div class="flex items-center gap-4">
                    <div class="min-w-[160px] h-[160px] bg-blackScale overflow-hidden rounded-[16px]"
                        :style="{ backgroundImage: 'url(' + item.img + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
                    </div>
                    <div>
                        <h4 class="text-left font-semibold mb-6 leading-tight linearBg">{{ item.title }}</h4>
                        <p class="text-white text-left">{{ item.description }}</p>
                    </div>
                </div>
                <a class="flex gap-4 justify-center items-center text-center p-2 text-white rounded-full"
                    :href="item.link">
                    <img width="24" src="../../../assets/arrow-black.svg" alt="">
                </a>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const data = [
    {
        img: "https://images.pexels.com/photos/9443526/pexels-photo-9443526.jpeg?auto=compress&cs=tinysrgb&w=560&h=560&dpr=1",
        title: "Grandes entreprises",
        description: "Trouvez la bonne formation, adaptée à votre besoin, votre secteur d'activité et votre métier : Commercial(e) terrain,Key Account Manager (KAM), Directeur(trice)Commercial(e)...",
        link: "/"
    },
    {
        img: "https://images.pexels.com/photos/28445237/pexels-photo-28445237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "PME",
        description: "Trouvez la bonne formation, adaptée à votre besoin, votre secteur d'activité et votre métier : Commercial(e) terrain,Key Account Manager (KAM), Directeur(trice)Commercial(e)...",
        link: "/"
    },
    {
        img: "https://images.pexels.com/photos/27059631/pexels-photo-27059631/free-photo-of-appartement-concevoir-designer-interieur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Start-ups",
        description: "Trouvez la bonne formation, adaptée à votre besoin, votre secteur d'activité et votre métier : Commercial(e) terrain,Key Account Manager (KAM), Directeur(trice)Commercial(e)...",
        link: "/"
    },
    {
        img: "https://images.pexels.com/photos/28403269/pexels-photo-28403269/free-photo-of-ville-d-almere.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Commerciaux",
        description: "Trouvez la bonne formation, adaptée à votre besoin, votre secteur d'activité et votre métier : Commercial(e) terrain,Key Account Manager (KAM), Directeur(trice)Commercial(e)...",
        link: "/"
    },
]

function goTo(link) {
    router.push(link)
}
</script>

<style lang="scss" scoped>
.line {
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>