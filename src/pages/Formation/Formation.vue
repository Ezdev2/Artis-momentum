<template>
    <div v-if="listing">
        <Banner :data="data[0]" @show-detail="showDetail(0)" />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8 w-full px-[122px] py-[80px]">
            <div @click="showDetail(index)"
                class="flex gap-8 justify-between items-center glassMorphism rounded-lg p-4 transition-all border border-gray hover:border-secondary hover:border-2 hover:bg-gray-700 hover:shadow-lg"
                v-for="(item, index) in data" :key="index">
                <div class="flex flex-col items-center gap-4">
                    <div class="w-full h-[240px] bg-blackScale overflow-hidden rounded-[8px]"
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

const listing = ref(true);
const dataFormation = ref({});

const data = [
    {
        img: "https://images.pexels.com/photos/241832/pexels-photo-241832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Grandes entreprises",
        description: "Trouvez la bonne formation, adaptée à votre besoin, votre secteur d'activité et votre métier : Commercial(e) terrain,Key Account Manager (KAM), Directeur(trice)Commercial(e)...",
        rating: 4,
        content: "Dans un monde saturé d'informations et de distractions, capter et conserver l’attention du consommateur est devenu un défi majeur pour les entreprises. Ce livre explore en profondeur l’économie de l’attention, un concept qui devient incontournable dans le marketing digital et la gestion de la relation client. L’auteur y décrit les nouvelles règles du jeu pour capter l’attention dans un environnement numérique saturé, où les consommateurs sont constamment sollicités. Ce livre vous guide sur la manière d’adapter vos stratégies de marketing pour rester visible et pertinent. En se basant sur les dernières avancées en neurosciences, en psychologie du consommateur, et en data analytics, l’auteur présente des méthodes efficaces pour personnaliser l’expérience client et maximiser l’impact de vos messages publicitaires. Le livre explore également comment les entreprises peuvent bâtir une relation authentique et de long terme avec leurs clients en offrant des expériences qui répondent à leurs besoins et aspirations.L’économie de l’attention ne concerne pas uniquement les marques et leurs campagnes publicitaires, mais aussi la manière dont les entreprises gèrent leur communication interne, leur branding, et l’expérience de leurs employés. Ce livre démontre comment les entreprises peuvent utiliser la puissance de l’attention pour se différencier de la concurrence, mais aussi comment éviter les pièges d’une sur-saturation qui peut entraîner une perte d’engagement. Un guide essentiel pour les marketeurs, les chefs d’entreprise et tous ceux qui veulent rester compétitifs dans un monde où l’attention est la ressource la plus précieuse. Ce livre vous guide sur la manière d’adapter vos stratégies de marketing pour rester visible et pertinent. En se basant sur les dernières avancées en neurosciences, en psychologie du consommateur, et en data analytics, l’auteur présente des méthodes efficaces pour personnaliser l’expérience client et maximiser l’impact de vos messages publicitaires. Le livre explore également comment les entreprises peuvent bâtir une relation authentique et de long terme avec leurs clients en offrant des expériences qui répondent à leurs besoins et aspirations.L’économie de l’attention ne concerne pas uniquement les marques et leurs campagnes publicitaires, mais aussi la manière dont les entreprises gèrent leur communication interne, leur branding, et l’expérience de leurs employés. Ce livre démontre comment les entreprises peuvent utiliser la puissance de l’attention pour se différencier de la concurrence, mais aussi comment éviter les pièges d’une sur-saturation qui peut entraîner une perte d’engagement. Un guide essentiel pour les marketeurs, les chefs d’entreprise et tous ceux qui veulent rester compétitifs dans un monde où l’attention est la ressource la plus précieuse. Ce livre vous guide sur la manière d’adapter vos stratégies de marketing pour rester visible et pertinent. En se basant sur les dernières avancées en neurosciences, en psychologie du consommateur, et en data analytics, l’auteur présente des méthodes efficaces pour personnaliser l’expérience client et maximiser l’impact de vos messages publicitaires. Le livre explore également comment les entreprises peuvent bâtir une relation authentique et de long terme avec leurs clients en offrant des expériences qui répondent à leurs besoins et aspirations.L’économie de l’attention ne concerne pas uniquement les marques et leurs campagnes publicitaires, mais aussi la manière dont les entreprises gèrent leur communication interne, leur branding, et l’expérience de leurs employés. Ce livre démontre comment les entreprises peuvent utiliser la puissance de l’attention pour se différencier de la concurrence, mais aussi comment éviter les pièges d’une sur-saturation qui peut entraîner une perte d’engagement. Un guide essentiel pour les marketeurs, les chefs d’entreprise et tous ceux qui veulent rester compétitifs dans un monde où l’attention est la ressource la plus précieuse. Ce livre vous guide sur la manière d’adapter vos stratégies de marketing pour rester visible et pertinent. En se basant sur les dernières avancées en neurosciences, en psychologie du consommateur, et en data analytics, l’auteur présente des méthodes efficaces pour personnaliser l’expérience client et maximiser l’impact de vos messages publicitaires. Le livre explore également comment les entreprises peuvent bâtir une relation authentique et de long terme avec leurs clients en offrant des expériences qui répondent à leurs besoins et aspirations.L’économie de l’attention ne concerne pas uniquement les marques et leurs campagnes publicitaires, mais aussi la manière dont les entreprises gèrent leur communication interne, leur branding, et l’expérience de leurs employés. Ce livre démontre comment les entreprises peuvent utiliser la puissance de l’attention pour se différencier de la concurrence, mais aussi comment éviter les pièges d’une sur-saturation qui peut entraîner une perte d’engagement. Un guide essentiel pour les marketeurs, les chefs d’entreprise et tous ceux qui veulent rester compétitifs dans un monde où l’attention est la ressource la plus précieuse."
    },
    {
        img: "https://images.pexels.com/photos/28445237/pexels-photo-28445237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "PME",
        description: "Trouvez la bonne formation, adaptée à votre besoin, votre secteur d'activité et votre métier : Commercial(e) terrain,Key Account Manager (KAM), Directeur(trice)Commercial(e)...",
        rating: 1,
        content: "Dans un monde saturé d'informations et de distractions, capter et conserver l’attention du consommateur est devenu un défi majeur pour les entreprises. Ce livre explore en profondeur l’économie de l’attention, un concept qui devient incontournable dans le marketing digital et la gestion de la relation client. L’auteur y décrit les nouvelles règles du jeu pour capter l’attention dans un environnement numérique saturé, où les consommateurs sont constamment sollicités. Ce livre vous guide sur la manière d’adapter vos stratégies de marketing pour rester visible et pertinent. En se basant sur les dernières avancées en neurosciences, en psychologie du consommateur, et en data analytics, l’auteur présente des méthodes efficaces pour personnaliser l’expérience client et maximiser l’impact de vos messages publicitaires. Le livre explore également comment les entreprises peuvent bâtir une relation authentique et de long terme avec leurs clients en offrant des expériences qui répondent à leurs besoins et aspirations.L’économie de l’attention ne concerne pas uniquement les marques et leurs campagnes publicitaires, mais aussi la manière dont les entreprises gèrent leur communication interne, leur branding, et l’expérience de leurs employés. "
    },
    {
        img: "https://images.pexels.com/photos/27059631/pexels-photo-27059631/free-photo-of-appartement-concevoir-designer-interieur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Start-ups",
        description: "Trouvez la bonne formation, adaptée à votre besoin, votre secteur d'activité et votre métier : Commercial(e) terrain,Key Account Manager (KAM), Directeur(trice)Commercial(e)...",
        rating: 5,
        content: "/"
    },
    {
        img: "https://images.pexels.com/photos/28403269/pexels-photo-28403269/free-photo-of-ville-d-almere.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Commerciaux",
        description: "Trouvez la bonne formation, adaptée à votre besoin, votre secteur d'activité et votre métier : Commercial(e) terrain,Key Account Manager (KAM), Directeur(trice)Commercial(e)...",
        rating: 2,
        content: "/"
    },
    {
        img: "https://images.pexels.com/photos/9443526/pexels-photo-9443526.jpeg?auto=compress&cs=tinysrgb&w=560&h=560&dpr=1",
        title: "Grandes entreprises",
        description: "Trouvez la bonne formation, adaptée à votre besoin, votre secteur d'activité et votre métier : Commercial(e) terrain,Key Account Manager (KAM), Directeur(trice)Commercial(e)...",
        rating: 5,
        content: "/"
    },
    {
        img: "https://images.pexels.com/photos/28445237/pexels-photo-28445237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "PME",
        description: "Trouvez la bonne formation, adaptée à votre besoin, votre secteur d'activité et votre métier : Commercial(e) terrain,Key Account Manager (KAM), Directeur(trice)Commercial(e)...",
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