<template>
    <div class="lg:py-[122px] p-[24px] lg:px-[122px] flex flex-col gap-8 justify-center">
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-8">
            <div class="col-span-2 flex flex-col md:flex-row gap-4">
                <img class="rounded-[4px]" width="200"
                    src="https://images.pexels.com/photos/3280211/pexels-photo-3280211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="">
                <div>
                    <h2 class="font-bold text-left text-white">Merci d'avoir téléchargé notre programme de formation! <br>
                    </h2>
                    <p class="text-blackScale text-left">
                        Si votre téléchargement ne démarre pas automatiquement, <a :href="'/formation-' + dataInfo.slug + '.pdf'" target="_blank"
                            class="text-primary hover:text-purple-400">cliquez ici</a> pour enregistrer votre PDF.
                    </p><br>
                    <div>
                        <button class="flex gap-2 items-center justify-center text-center px-4 py-2 bg-transparent text-primary border border-primary"
                            @click="goTo('/formation')">
                            <Icon icon="radix-icons:arrow-left" />
                            <span class="hidden lg:block">
                                    Revenir à la liste des formations
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <Form />
        </div>
        <hr class="text-blackScale">
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
                        @click="goTo(item.link + item.slug + '.pdf')">
                        <span>Voir la formation</span>
                        <img width="12" src="../../assets/arrow.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

import Form from '../../components/Common/Form.vue';
import { formationData } from '@/data/formationData.js';

const props = defineProps({
    dataInfo: { type: Object, default: {} }
});

const filteredData = formationData
    .filter(item => item.slug !== props.dataInfo.slug) 
    .sort(() => 0.5 - Math.random()) 
    .slice(0, 4); 

function goTo(link) {
    window.open(link, '_blank');
}

</script>

<style lang="scss" scoped>
.service-card {
    position: relative;
    background: var(--color-secondary);
    color: white;
}

.service-card::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(85.12deg, #FF6F20 -33.54%, #C75B00 24.17%, #8A3B00 99.96%);
    z-index: -1;
    border-radius: inherit;
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
</style>