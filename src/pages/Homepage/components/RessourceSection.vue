<template>
    <div class="py-[122px] px-[24px] sm:px-[122px] bg-primary flex flex-col gap-6 justify-center items-center">
        <div class="flex flex-col gap-2 w-full">
            <p class="font-bold text-secondary text-left uppercase">Nos ressources</p>
            <h2 class="font-bold text-left text-white">Vive la vente !</h2>
            <p class="text-white text-left">
                Trouvez la bonne formation, adaptée à votre besoin, votre secteur
                d'activité et votre métier : Commercial(e) terrain, Key Account Manager (KAM), Directeur(trice)
                Commercial(e)...
            </p>
        </div>

        <!-- Infinite scroll slider -->
        <div class="overflow-hidden relative w-full">
            <div class="slide-track">
                <div class="w-[300px] mx-[10px] flex justify-center" v-for="n in 14" :key="n">
                    <div class="card bg-white rounded-[10px] py-[12px] px-[20px] flex items-center h-[100%]">
                        <div class="w-full h-[120px] flex items-center justify-center">
                            <img width="84" :src="getImageSrc(n)" alt="" />
                        </div>
                        <div class="flex py-[20px] text-center">
                            <div class="flex flex-col gap-2 items-start">
                                <h4 class="font-bold text-left ">{{ getCardTitle(n) }}</h4>
                                <p class="text-left font-thin">{{ getCardDescription(n) }}</p>
                            </div>
                            <a href="#" class="card-button">
                                <img src="../../../assets/arrow-black.svg" alt="">
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import book from '../../../assets/book.svg';
import article from '../../../assets/article.svg';
import audio from '../../../assets/audio.svg';
import liveclass from '../../../assets/liveclass.svg';
import newsletter from '../../../assets/newsletter.svg';
import video from '../../../assets/video.svg';

const cards = [
    { image: book, title: 'Livre', description: 'Découvrez notre sélection de livres spécialisés.' },
    { image: article, title: 'Article', description: 'Lisez des articles experts sur les ventes.' },
    { image: audio, title: 'Podcast', description: 'Écoutez nos podcasts pour des conseils pratiques.' },
    { image: liveclass, title: 'Live Class', description: 'Participez à nos formations en direct.' },
    { image: newsletter, title: 'Newsletter', description: 'Inscrivez-vous à notre newsletter.' },
    { image: video, title: 'Vidéo', description: 'Regardez nos vidéos de formations.' }
];
const getImageSrc = (index) => {
    return cards[(index - 1) % cards.length].image;
};

const getCardTitle = (index) => {
    return cards[(index - 1) % cards.length].title;
};

const getCardDescription = (index) => {
    return cards[(index - 1) % cards.length].description;
};
</script>

<style lang="scss" scoped>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-300px * 7));
    }
}

.slide-track {
    animation: scroll 40s linear infinite;
    display: flex;
    width: calc(300px * 14);
}

.card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: scale(1.05);
}

.card-button {
    display: inline-block;
    padding: 10px 20px;
    // background-color: var(--color-secondary);
    // color: var(--color-primary);
    // text-decoration: none;
    border-radius: 5px;
    font-size: 14px;
    transition: background-color 0.3s;
}

.card-button:hover {
    // background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    // color: var(--color-secondary);
}
</style>