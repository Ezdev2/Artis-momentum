<template>
    <div class="lg:py-[122px] p-[24px] lg:px-[122px] flex flex-col gap-8 justify-center">
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-8">
            <div class="col-span-2 flex gap-4">
                <img class="rounded-[4px]" width="200"
                    src="https://images.pexels.com/photos/3280211/pexels-photo-3280211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="">
                <div>
                    <h2 class="font-bold text-left text-white">Merci d'avoir téléchargé : <br>
                        <span>"Le livre sur la vente pour booster vos commerciaux et votre croissance"</span>
                    </h2>
                    <p class="text-blackScale text-left">
                        Si votre téléchargement ne démarre pas automatiquement, <a href="/"
                            class="text-primary hover:text-purple-400">cliquez ici</a>
                    </p>
                </div>
            </div>
            <Form />
        </div>
        <hr class="text-blackScale">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="service-card flex flex-col gap-4 bg-white rounded-lg p-6 transition-all hover:bg-gray-700 hover:shadow-lg"
                v-for="(item, index) in data" :key="index">
                <Icon class="h-8 w-8" icon="mingcute:book-3-line" />
                <div class="flex flex-col gap-8 justify-between">
                    <div>
                        <h4 class="text-left font-semibold mb-6 leading-tight">{{ item.title }}</h4>
                        <p class="text-left desc">{{ item.description }}</p>
                    </div>
                    <button
                        class="flex gap-4 justify-center items-center text-center px-6 py-3.5 text-white linear hover:bg-secondary"
                        @click="goTo(item.link)">
                        <span>En savoir plus</span>
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

const data = [
    {
        title: "LA DIRECTION COMMERCIALE",
        description: "La direction commerciale est le socle qui permet le développement du chiffre d’affaires de votre entreprise !",
        link: "/"
    },
    {
        title: "LE SERVICE INFORMATIQUE",
        description: "Un service informatique opérationnel 7/7. Reposez-vous et optez pour la tranquillité !",
        link: "/"
    },
    {
        title: "LES FORMATIONS VENTE",
        description: "Notre équipe est passionnée par les métiers de la vente et la quête de l’excellence dans la relation client !",
        link: "/"
    },
    {
        title: "LE RECRUTEMENT",
        description: "Ne recrutez plus au feeling, sans plan d’action, par faute de temps, de moyens, de connaissances… !",
        link: "/"
    },
]

function goTo(link) {
    console.log(link);
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
    background: linear-gradient(85.12deg, #61285b -33.54%, #251e51 24.17%, #021a70 99.96%);
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