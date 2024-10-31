<template>
    <CallToAction v-if="cta" :dataInfo="data" />
    <div class="bg-transparent p-[24px] lg:px-[122px] pt-[80px] md:grid grid-cols-3 gap-8">
        <div class="col-span-2 flex flex-col gap-4 overflow-hidden relative">
            <!-- Breadcrumb Section -->
            <div class="w-full flex gap-2 justify-between items-center">
                <p class="text-left text-white">
                    <a href="/formation" class="u-link">
                        Liste des formations
                    </a>
                    / <span class="font-bold">{{ data.title }}</span>
                </p>
                <div>
                    <button class="flex gap-2 items-center justify-center text-center px-4 py-2 bg-primary text-white"
                        @click="downloadPDF('/formation-' + data.slug + '.pdf')">
                        <Icon icon="radix-icons:download" />
                        <span class="hidden lg:block">
                            Télécharger le PDF
                        </span>
                    </button>
                </div>
            </div>

            <!-- Banner Image Section -->
            <div class="banner-container h-[150px] md:h-[700px] w-full mb-[20px]">
                <img :src="data.img" alt="" class="object-fit w-full h-full">
            </div>

            <!-- Title and Description -->
            <div class="flex flex-col gap-4">
                <!-- <h2 class="text-left linearBg font-bold">{{ data.title }}</h2> -->
                <div class="flex justify-between items-center w-full mb-6 ">
                    <h2 class="text-left text-primary font-bold">{{ data.title }}</h2>
                    <div class="flex items-center">
                        <template v-for="star in getStars(data.rating)" :key="star.index">
                            <Icon :icon="star.icon" width="24" height="24" :style="{ color: star.color }" />
                        </template>
                    </div>
                </div>
                <p class="text-left text-white">{{ data.description }}</p>
            </div>


            <hr class="text-blackScale">

            <div class="flex gap-4">
                <div>
                    <button class="flex gap-2 items-center justify-center text-center px-4 py-2 bg-primary text-white"
                        @click="openFormation(data.slug)">
                        <Icon icon="radix-icons:archive" />
                        <span class="hidden lg:block">
                            Voir la formation
                        </span>
                    </button>
                </div>
                <div>
                    <button class="flex gap-2 items-center justify-center text-center px-4 py-2 bg-transparent text-primary border border-primary"
                        @click="goToFormations">
                        <Icon icon="radix-icons:arrow-left" />
                        <span class="hidden lg:block">Retour à la liste des formations
                        </span>
                    </button>
                </div>
            </div>
            <Form />
        </div>
        <!-- Ici section News (financement / avis / certifications ) -->
        <Sidebar />
    </div>
    
    <div class="lg:py-[122px] p-[24px] lg:px-[122px] flex flex-col gap-8 justify-center">
        <h3 class="font-bold text-left text-white">Ces formations peuvent aussi vous intéresser : <br>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="service-card flex flex-col gap-4 bg-white rounded-lg p-6 transition-all hover:bg-gray-700 hover:shadow-lg"
                v-for="(item, index) in filteredData" :key="index">
                <Icon class="h-8 w-8" icon="mingcute:book-3-line" />
                <div class="flex flex-col gap-8 justify-between">
                    <div>
                        <h4 class="text-left font-semibold mb-6 leading-tight">{{ item.title }}</h4>
                        <p class="text-left desc">{{ item.description }}</p>
                    </div>
                    <button
                        class="flex gap-4 justify-center items-center text-center px-6 py-3.5 text-white linear hover:bg-secondary"
                        @click="openFormation(item.slug)">
                        <span>Voir la formation</span>
                    </button>
                </div>
            </div>
            
        </div>
        <div>
            <button class="flex gap-2 items-center justify-center text-center px-4 py-2 bg-transparent text-primary border border-primary"
                @click="goToFormations">
                <Icon icon="radix-icons:arrow-right" />
                <span class="hidden lg:block">Voir toutes nos formations ici
                </span>
            </button>
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';

import { Icon } from '@iconify/vue';
import Sidebar from '../../../components/Layouts/Sidebar.vue';
import Form from '../../../components/Common/Form.vue';
import CallToAction from '../../CTA/CallToAction.vue';
import { formationData } from '@/data/formationData.js';

const cta = ref(false);

const props = defineProps({
    data: { type: Object, default: {} }
});

// Function to get the stars based on the rating
const getStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push({ icon: "noto:star", color: "yellow", index: i });  // Colored star
        } else {
            stars.push({ icon: "bi:star-fill", color: "white", index: i });  // Uncolored star
        }
    }
    return stars;
}

const filteredData = formationData
    .filter(item => item.slug !== props.data.slug) 
    .sort(() => 0.5 - Math.random()) 
    .slice(0, 4); 

function goTo(link) {
    window.open(link, '_blank');
}

/*
const openFormation = (link) => {
    window.open(link, '_blank');
}
*/

const openFormation = (slug) => {
    const pptxLink = `https://docs.google.com/gview?url=https://artis-momentum.netlify.app/formation-${slug}.pptx&embedded=true`;
    window.open(pptxLink, '_blank');
};

const goToFormations = () => {
    window.location.href="/formation";
}

const downloadPDF = (downloadLink) => {
    const link = document.createElement('a');
    link.href = downloadLink;  
    link.download = '';  
    link.click();  

    setTimeout(() => {
        cta.value = true;
        detailFormation.value = false;
    }, 2000);  
};

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

.desc {
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

}
.u-link {
  text-decoration: none; 
  color: inherit; 
  transition: text-decoration 0.2s; 
}

.u-link:hover {
  text-decoration: underline; 
}
</style>
