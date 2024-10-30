<template>
    <div v-if="listing" class="p-[24px] lg:px-[122px]">
        <Banner :data="data[0]" @show-detail="showDetail(0)" />
        <div id="formation-section" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8 w-full py-[36px] md:py-[80px]">
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
import img11 from '@/assets/negociation.png';
import img12 from '@/assets/pro-account-management.png';
import img13 from '@/assets/tournees.png';
import img14 from '@/assets/management-commercial.png';
import img15 from '@/assets/efficacite-commerciale.png';
import img16 from '@/assets/engagement-efficacite.png';
import img17 from '@/assets/influence-parole.png';
import img18 from '@/assets/savoir-recruter.png';
import img19 from '@/assets/adaptation-cible.png';

const listing = ref(true);
const dataFormation = ref({});

const data = [
    {
        img: img1,
        title: "Les principes essentiels de la vente",
        description: "Les stratégies et pratiques optimales pour maximiser l’efficacité des équipes commerciales à chaque étape du cycle de vente.",
        rating: 4,
        slug: "les-principes-essentiels-de-la-vente",
    },
    {
        img: img2,
        title: "Acquisition de nouveaux clients",
        description: "Accroître le nombre de rendez-vous clients en utilisant les techniques de prospection les plus efficaces du moment.",
        rating: 1,
        slug: "acquisition-de-nouveaux-clients",
    },
    {
        img: img3,
        title: "Stratégies de Négociation Commerciale",
        description: "Négocier avec assurance tout en défendant ses prix pour garantir la rentabilité.",
        rating: 5,
        slug: "strategies-de-negociation-commerciale",
    },
    {
        img: img4,
        title: "100% Closing",
        description: "Maîtriser l'art de conclure une vente et adapter l'approche adéquate pour garantir la signature de son client.",
        rating: 2,
        slug: "100-closing",
    },
    {
        img: img5,
        title: "Gestion des Grands Comptes",
        description: "Découvrez comment dynamiser votre réseau et entretenir votre portefeuille client pour augmenter votre taux de signature.",
        rating: 5,
        slug: "gestion-des-grands-comptes",
    },
    {
        img: img6,
        title: "Commercialiser sur LinkedIn",
        description: "Utiliser LinkedIn comme principal canal d'acquisition et élargir son réseau de vente.",
        rating: 4,
        slug: "commercialiser-sur-linkedin",
    },
    {
        img: img7,
        title: "Vente par Intermédiaire",
        description: "Dynamiser efficacement les réseaux de distribution pour exploiter pleinement leur potentiel.",
        rating: 3,
        slug: "vente-par-intermediaire",
    },
    {
        img: img8,
        title: "Vente à distance",
        description: "Les principes essentiels du cycle de vente B2B adaptés au contexte actuel de la vente à distance.",
        rating: 3,
        slug: "vente-a-distance",
    },
    {
        img: img9,
        title: "Accompagnement Commercial",
        description: "Optimisez la performance de vos commerciaux grâce à un accompagnement individuel et sur mesure.",
        rating: 5,
        slug: "accompagnement-commercial",
    },
    {
        img: img10,
        title: "Évaluation des Performances Commerciales",
        description: "Évaluer les compétences de ses commerciaux à l'aide d'un test de 80 questions et de mises en situation de vente.",
        rating: 4,
        slug: "evaluation-des-performances-commerciales",
    },
    {
        img: img11,
        title: "De la Relation client à la conclusion de vente",
        description: "Développez vos compétences commerciales avec un expert en vente. Nos 50 formateurs proposent une approche pédagogique innovante axée sur la pratique, destinée aux assistants des ventes et aux CSM. Disponibles dans toute la France et adaptés à tous les niveaux.",
        rating: 2,
        slug: "de-la-relation-client-a-la-conclusion-de-vente",
    },
    {
        img: img12,
        title: "Devenir un Expert en Gestion des Comptes",
        description: "Maîtrisez l'art d'établir des relations durables avec vos clients afin de générer des opportunités commerciales additionnelles et récurrentes.",
        rating: 3,
        slug: "devenir-un-expert-en-gestion-des-comptes",
    },
    {
        img: img13,
        title: "Accroître l'efficacité de vos tournées",
        description: "Boostez le ROI de vos tournées de 30 % en apprenant à organiser, préparer et cibler efficacement chacune de vos visites. Tous nos formateurs sont d'anciens dirigeants commerciaux, et nos programmes se concentrent sur des simulations de vente réelles.",
        rating: 2,
        slug: "accroitre-l-efficacite-de-vos-tournees",
    },
    {
        img: img14,
        title: "Gestion Commerciale",
        description: "Gérer et dynamiser l'activité commerciale, recruter les meilleurs talents et maîtriser les outils adéquats.",
        rating: 4,
        slug: "gestion-commerciale",
    },
    {
        img: img15,
        title: "Productivité Commerciale",
        description: "Améliorer sa performance en focalisant ses efforts sur des tâches à forte valeur ajoutée.",
        rating: 5,
        slug: "productivite-commerciale",
    },
    {
        img: img16,
        title: "Engagement et Efficacité",
        description: "Booster sa confiance, son engagement pour dépasser ses objectifs et favoriser son efficacité.",
        rating: 1,
        slug: "engagement-et-efficacite",
    },
    {
        img: img17,
        title: "Influencer par la prise de parole",
        description: "Développer ses compétences en communication et sa posture pour optimiser la relation client et faire une impression marquante à chaque rendez-vous.",
        rating: 3,
        slug: "influencer-par-la-prise-de-parole",
    },
    {
        img: img18,
        title: "Maîtriser les techniques de recrutement efficaces",
        description: "Réussir le recrutement de commerciaux et acquérir les compétences pour dénicher le candidat idéal.",
        rating: 5,
        slug: "maitriser-les-techniques-de-recrutement-efficaces",
    },
    {
        img: img19,
        title: "S'adapter à son public cible",
        description: "Ajuster son discours et faire preuve d'agilité pour renforcer les relations commerciales avec l'ensemble de ses clients.",
        rating: 2,
        slug: "s-adapter-a-son-public-cible",
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