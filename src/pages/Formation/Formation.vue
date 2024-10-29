<template>
    <div v-if="listing" class="p-[24px] lg:px-[122px]">
        <Banner :data="data[0]" @show-detail="showDetail(0)" />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8 w-full py-[36px] md:py-[80px]">
            <div @click="showDetail(index)"
                class="flex gap-8 justify-between items-center glassMorphism rounded-lg p-4 transition-all border border-gray hover:border-secondary hover:border-2 hover:bg-gray-700 hover:shadow-lg"
                v-for="(item, index) in data" :key="index">
                <div class="flex flex-col items-center gap-4">
                    <div class="w-full h-[300px] bg-blackScale overflow-hidden rounded-[8px]"
                        :style="{ backgroundImage: 'url(' + item.img + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
                    </div>
                    <div>
                        <div class="flex justify-between items-center w-full mb-6 ">
                            <h4 class="text-left linearBg font-semibold leading-tight">{{ item.title }}</h4>
                            <div class="flex items-center">
                                <template v-for="star in getStars(item.rating)" :key="star.index">
                                    <Icon :icon="star.icon" width="18" height="18" :style="{ color: star.color }" />
                                </template>
                            </div>
                        </div>
                        <p class="text-white text-left">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <DetailFormation :data="dataFormation" />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Banner from './components/Banner.vue';
// import List from './components/List.vue';
import DetailFormation from './components/DetailFormation.vue';
import { Icon } from '@iconify/vue';
import img1 from '@/assets/fondamentaux.webp';
import img2 from '@/assets/prospection.png';
import img3 from '@/assets/relation-client.png';
import img4 from '@/assets/viser-100-closing.png';
import img5 from '@/assets/key-account-mgmt.png';
import img6 from '@/assets/vente-linkedin.png';
import img7 from '@/assets/vente-indirecte.png';
import img8 from '@/assets/vente-a-distance.png';
import img9 from '@/assets/coaching.png';
import img10 from '@/assets/evaluation.png';

const listing = ref(true);
const dataFormation = ref({});

const data = [
    {
        img: img1,
        title: "Les fondamentaux de la vente",
        description: "Les meilleures techniques et routines pour renforcer l’efficacité de ses commerciaux tout au long du cycle de vente.",
        rating: 4,
        content: "Dans un monde saturé d'informations et de distractions, capter et conserver l’attention du consommateur est devenu un défi majeur pour les entreprises. Ce livre explore en profondeur l’économie de l’attention, un concept qui devient incontournable dans le marketing digital et la gestion de la relation client. L’auteur y décrit les nouvelles règles du jeu pour capter l’attention dans un environnement numérique saturé, où les consommateurs sont constamment sollicités. Ce livre vous guide sur la manière d’adapter vos stratégies de marketing pour rester visible et pertinent. En se basant sur les dernières avancées en neurosciences, en psychologie du consommateur, et en data analytics, l’auteur présente des méthodes efficaces pour personnaliser l’expérience client et maximiser l’impact de vos messages publicitaires. Le livre explore également comment les entreprises peuvent bâtir une relation authentique et de long terme avec leurs clients en offrant des expériences qui répondent à leurs besoins et aspirations.L’économie de l’attention ne concerne pas uniquement les marques et leurs campagnes publicitaires, mais aussi la manière dont les entreprises gèrent leur communication interne, leur branding, et l’expérience de leurs employés. Ce livre démontre comment les entreprises peuvent utiliser la puissance de l’attention pour se différencier de la concurrence, mais aussi comment éviter les pièges d’une sur-saturation qui peut entraîner une perte d’engagement. Un guide essentiel pour les marketeurs, les chefs d’entreprise et tous ceux qui veulent rester compétitifs dans un monde où l’attention est la ressource la plus précieuse. Ce livre vous guide sur la manière d’adapter vos stratégies de marketing pour rester visible et pertinent. En se basant sur les dernières avancées en neurosciences, en psychologie du consommateur, et en data analytics, l’auteur présente des méthodes efficaces pour personnaliser l’expérience client et maximiser l’impact de vos messages publicitaires. Le livre explore également comment les entreprises peuvent bâtir une relation authentique et de long terme avec leurs clients en offrant des expériences qui répondent à leurs besoins et aspirations.L’économie de l’attention ne concerne pas uniquement les marques et leurs campagnes publicitaires, mais aussi la manière dont les entreprises gèrent leur communication interne, leur branding, et l’expérience de leurs employés. Ce livre démontre comment les entreprises peuvent utiliser la puissance de l’attention pour se différencier de la concurrence, mais aussi comment éviter les pièges d’une sur-saturation qui peut entraîner une perte d’engagement. Un guide essentiel pour les marketeurs, les chefs d’entreprise et tous ceux qui veulent rester compétitifs dans un monde où l’attention est la ressource la plus précieuse. Ce livre vous guide sur la manière d’adapter vos stratégies de marketing pour rester visible et pertinent. En se basant sur les dernières avancées en neurosciences, en psychologie du consommateur, et en data analytics, l’auteur présente des méthodes efficaces pour personnaliser l’expérience client et maximiser l’impact de vos messages publicitaires. Le livre explore également comment les entreprises peuvent bâtir une relation authentique et de long terme avec leurs clients en offrant des expériences qui répondent à leurs besoins et aspirations.L’économie de l’attention ne concerne pas uniquement les marques et leurs campagnes publicitaires, mais aussi la manière dont les entreprises gèrent leur communication interne, leur branding, et l’expérience de leurs employés. Ce livre démontre comment les entreprises peuvent utiliser la puissance de l’attention pour se différencier de la concurrence, mais aussi comment éviter les pièges d’une sur-saturation qui peut entraîner une perte d’engagement. Un guide essentiel pour les marketeurs, les chefs d’entreprise et tous ceux qui veulent rester compétitifs dans un monde où l’attention est la ressource la plus précieuse. Ce livre vous guide sur la manière d’adapter vos stratégies de marketing pour rester visible et pertinent. En se basant sur les dernières avancées en neurosciences, en psychologie du consommateur, et en data analytics, l’auteur présente des méthodes efficaces pour personnaliser l’expérience client et maximiser l’impact de vos messages publicitaires. Le livre explore également comment les entreprises peuvent bâtir une relation authentique et de long terme avec leurs clients en offrant des expériences qui répondent à leurs besoins et aspirations.L’économie de l’attention ne concerne pas uniquement les marques et leurs campagnes publicitaires, mais aussi la manière dont les entreprises gèrent leur communication interne, leur branding, et l’expérience de leurs employés. Ce livre démontre comment les entreprises peuvent utiliser la puissance de l’attention pour se différencier de la concurrence, mais aussi comment éviter les pièges d’une sur-saturation qui peut entraîner une perte d’engagement. Un guide essentiel pour les marketeurs, les chefs d’entreprise et tous ceux qui veulent rester compétitifs dans un monde où l’attention est la ressource la plus précieuse."
    },
    {
        img: img2,
        title: "Prospection Commerciale",
        description: "Augmenter son nombre de rendez-vous clients grâce aux meilleures techniques de prospection du moment.",
        rating: 1,
        content: "Dans un monde saturé d'informations et de distractions, capter et conserver l’attention du consommateur est devenu un défi majeur pour les entreprises. Ce livre explore en profondeur l’économie de l’attention, un concept qui devient incontournable dans le marketing digital et la gestion de la relation client. L’auteur y décrit les nouvelles règles du jeu pour capter l’attention dans un environnement numérique saturé, où les consommateurs sont constamment sollicités. Ce livre vous guide sur la manière d’adapter vos stratégies de marketing pour rester visible et pertinent. En se basant sur les dernières avancées en neurosciences, en psychologie du consommateur, et en data analytics, l’auteur présente des méthodes efficaces pour personnaliser l’expérience client et maximiser l’impact de vos messages publicitaires. Le livre explore également comment les entreprises peuvent bâtir une relation authentique et de long terme avec leurs clients en offrant des expériences qui répondent à leurs besoins et aspirations.L’économie de l’attention ne concerne pas uniquement les marques et leurs campagnes publicitaires, mais aussi la manière dont les entreprises gèrent leur communication interne, leur branding, et l’expérience de leurs employés. "
    },
    {
        img: img3,
        title: "Négociation Commerciale",
        description: "Négocier avec confiance et savoir défendre ses prix pour préserver sa rentabilité.",
        rating: 5,
        content: "/"
    },
    {
        img: img4,
        title: "Viser 100% Closing",
        description: "Apprendre à savoir parfaitement conclure une vente et adapter la bonne approche pour faire signer son client à coup sûr.",
        rating: 2,
        content: "/"
    },
    {
        img: img5,
        title: "Key Account Management",
        description: "Apprenez à animer votre réseau et à faire vivre votre portefeuille client pour booster votre taux de signature.",
        rating: 5,
        content: "/"
    },
    {
        img: img6,
        title: "Vendre sur Linkedin",
        description: "Faire de Linkedin son canal d’acquisition n°1 et développer son réseau de vente.",
        rating: 0,
        content: "/"
    },
    {
        img: img7,
        title: "Vente Indirecte",
        description: "Bien animer les réseaux de distribution et aller chercher leur plein potentiel.",
        rating: 0,
        content: "/"
    },
    {
        img: img8,
        title: "Vente à distance",
        description: "Les fondamentaux du cycle de vente B2B adapté au contexte de vente à distance généralisé.",
        rating: 0,
        content: "/"
    },
    {
        img: img9,
        title: "Coaching Commercial",
        description: "Améliorez la performance de ses commerciaux grâce à un accompagnement individuel et personnalisé.",
        rating: 0,
        content: "/"
    },
    {
        img: img10,
        title: "Evaluation commerciale",
        description: "Evaluer le niveau de ses commerciaux grâce à un test de 80 questions et mises en situation de vente.",
        rating: 0,
        content: "/"
    },
]

const getStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push({ icon: "noto:star", color: "yellow", index: i }); 
    } else {
      stars.push({ icon: "bi:star-fill", color: "white", index: i });
    }
  }
  return stars;
}


function showDetail(item) {
    listing.value = false;
    dataFormation.value = data[item]
}
</script>
<style scoped></style>