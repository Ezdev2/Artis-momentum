<template>
    <div class="p-[24px] md:py-[80px] md:px-[122px]">
        <div v-if="showDownload">
            <DownloadBook :databook="dataBook" />
            <hr class="text-blackScale">
        </div>
        <div class="py-[24px]">
            <h3 class="font-bold text-left text-white">
                Télécharger des livres essentiels pour comprendre les enjeux modernes du business
            </h3>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-8 w-full py-[24px]">
                <div @click="showDetail(index)" class="flex gap-8 justify-between glassMorphism rounded-lg p-4 transition-all border border-gray hover:border-secondary hover:border-2 hover:bg-gray-700 hover:shadow-lg"
                    v-for="(item, index) in data" :key="index">
                    <div class="flex flex-col items-center gap-4 overflow-hidden">
                        <div class="w-full h-[240px] bg-blackScale overflow-hidden rounded-[8px]"
                            :style="{ backgroundImage: 'url(' + item.img + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
                        </div>
                        <div>
                            <h4 class="text-left linearBg font-semibold mb-6 leading-tight">{{ item.title }}</h4>
                            <p class="text-white text-left desc">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import DownloadBook from './DowloadBook.vue';

const showDownload = ref(false);
const dataBook = ref({});

const data = [
    {
        img: "https://s3.amazonaws.com/virginia.webrand.com/virginia/CMBuFdI0a5A/ff57015d8d2f8cd46c85356c0ad1d703/1754/1691065983.png",
        title: "Le livre sur la vente pour booster vos commerciaux et votre croissance",
        description: "La différence d'efficacité commerciale est souvent imputée à la \"fibre commerciale\" que certains auraient et d'autres pas. Au contraire, l'enjeu repose sur la formation et le développement de la posture de champion au quotidien. Découvrez comment déclencher les bons déclics chez vos commerciaux et les transformer en véritables champions de la vente.",
        link: "/"
    },
    {
        img: "https://s3.amazonaws.com/virginia.webrand.com/virginia/UAr1p90-6z4/15ef99d3621dba3c18818ad9cc0407f5/1754/1649068341.png",
        title: "L'Art de Convaincre : Maîtriser l'Influence dans le Monde des Affaires",
        description: "Dans un environnement économique de plus en plus compétitif, la capacité à influencer et à convaincre est une compétence indispensable. Ce livre explore les techniques et stratégies qui permettent aux leaders, entrepreneurs et professionnels de convaincre leurs interlocuteurs et de maximiser leur impact. À travers des études de cas et des exemples concrets, l’auteur dévoile les secrets des plus grands négociateurs et influenceurs du monde des affaires. Il met en lumière des méthodes éprouvées pour établir une relation de confiance, écouter activement et convaincre de",
        link: "/"
    },
    {
        img: "https://s3.amazonaws.com/virginia.webrand.com/virginia/QUMgX8MxD4V/dd9827d3e28520d3e41a4ba400530c23/1754/1660234391.png",
        title: "Réinventer le Succès : Stratégies de Croissance pour une Entreprise du Futur",
        description: "Dans un environnement économique de plus en plus compétitif, la capacité à influencer et à convaincre est une compétence indispensable. Ce livre explore les techniques et stratégies qui permettent aux leaders, entrepreneurs et professionnels de convaincre leurs interlocuteurs et de maximiser leur impact. À travers des études de cas et des exemples concrets, l’auteur dévoile les secrets des plus grands négociateurs et influenceurs du monde des affaires. Il met en lumière des méthodes éprouvées pour établir une relation de confiance, écouter activement et convaincre de",
        link: "/"
    },
    {
        img: "https://s3.amazonaws.com/virginia.webrand.com/virginia/NCUnShWpwPO/7a1c6b3a073101d5ce6643cc80fce633/1754/1660234721.png",
        title: "Le Leadership Paradoxal : Comment Diriger avec Empathie et Autorité",
        description: "Dans un environnement économique de plus en plus compétitif, la capacité à influencer et à convaincre est une compétence indispensable. Ce livre explore les techniques et stratégies qui permettent aux leaders, entrepreneurs et professionnels de convaincre leurs interlocuteurs et de maximiser leur impact. À travers des études de cas et des exemples concrets, l’auteur dévoile les secrets des plus grands négociateurs et influenceurs du monde des affaires. Il met en lumière des méthodes éprouvées pour établir une relation de confiance, écouter activement et convaincre de",
        link: "/"
    },
    {
        img: "https://images.pexels.com/photos/9443526/pexels-photo-9443526.jpeg?auto=compress&cs=tinysrgb&w=560&h=560&dpr=1",
        title: "L'Économie de l'Attention : Comment Captiver et Fidéliser le Client Moderne",
        description: "Dans un environnement économique de plus en plus compétitif, la capacité à influencer et à convaincre est une compétence indispensable. Ce livre explore les techniques et stratégies qui permettent aux leaders, entrepreneurs et professionnels de convaincre leurs interlocuteurs et de maximiser leur impact. À travers des études de cas et des exemples concrets, l’auteur dévoile les secrets des plus grands négociateurs et influenceurs du monde des affaires. Il met en lumière des méthodes éprouvées pour établir une relation de confiance, écouter activement et convaincre de",
        link: "/"
    },
    {
        img: "https://images.pexels.com/photos/28445237/pexels-photo-28445237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "L'Art de Convaincre : Maîtriser l'Influence dans le Monde des Affaires",
        description: "Dans un environnement économique de plus en plus compétitif, la capacité à influencer et à convaincre est une compétence indispensable. Ce livre explore les techniques et stratégies qui permettent aux leaders, entrepreneurs et professionnels de convaincre leurs interlocuteurs et de maximiser leur impact. À travers des études de cas et des exemples concrets, l’auteur dévoile les secrets des plus grands négociateurs et influenceurs du monde des affaires. Il met en lumière des méthodes éprouvées pour établir une relation de confiance, écouter activement et convaincre de",
        link: "/"
    },
    {
        img: "https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Le livre sur la vente pour booster vos commerciaux et votre croissance",
        description: "La différence d'efficacité commerciale est souvent imputée à la \"fibre commerciale\" que certains auraient et d'autres pas. Au contraire, l'enjeu repose sur la formation et le développement de la posture de champion au quotidien. Découvrez comment déclencher les bons déclics chez vos commerciaux et les transformer en véritables champions de la vente.",
        link: "/"
    },
    {
        img: "https://images.pexels.com/photos/8534384/pexels-photo-8534384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Réinventer le Succès : Stratégies de Croissance pour une Entreprise du Futur",
        description: "Dans un environnement économique de plus en plus compétitif, la capacité à influencer et à convaincre est une compétence indispensable. Ce livre explore les techniques et stratégies qui permettent aux leaders, entrepreneurs et professionnels de convaincre leurs interlocuteurs et de maximiser leur impact. À travers des études de cas et des exemples concrets, l’auteur dévoile les secrets des plus grands négociateurs et influenceurs du monde des affaires. Il met en lumière des méthodes éprouvées pour établir une relation de confiance, écouter activement et convaincre de",
        link: "/"
    },
    {
        img: "https://images.pexels.com/photos/9969158/pexels-photo-9969158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "L'Art de Convaincre : Maîtriser l'Influence dans le Monde des Affaires",
        description: "Dans un environnement économique de plus en plus compétitif, la capacité à influencer et à convaincre est une compétence indispensable. Ce livre explore les techniques et stratégies qui permettent aux leaders, entrepreneurs et professionnels de convaincre leurs interlocuteurs et de maximiser leur impact. À travers des études de cas et des exemples concrets, l’auteur dévoile les secrets des plus grands négociateurs et influenceurs du monde des affaires. Il met en lumière des méthodes éprouvées pour établir une relation de confiance, écouter activement et convaincre de",
        link: "/"
    },
]

function showDetail(item) {
    showDownload.value = true;
    dataBook.value = data[item];
}
</script>
<style scoped>
.desc {
    height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
</style>