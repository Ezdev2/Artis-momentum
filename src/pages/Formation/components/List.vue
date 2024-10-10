<template>
    <div class="flex flex-col gap-4 w-full px-[122px] py-[80px]">
        <div class="flex gap-8 justify-between items-center bg-white rounded-lg p-6 transition-all border border-gray hover:border-secondary hover:border-2 hover:bg-gray-700 hover:shadow-lg"
            v-for="(item, index) in data" :key="index">
            <div class="flex items-center gap-4">
                <div class="min-w-[160px] h-[160px] bg-blackScale overflow-hidden rounded-[16px]"
                    :style="{ backgroundImage: 'url(' + item.img + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
                </div>
                <div>
                    <h4 class="text-left font-semibold mb-6 leading-tight">{{ item.title }}</h4>
                    <p class="text-blackScale text-left">{{ item.description }}</p>
                </div>
            </div>
            <a class="flex gap-4 justify-center items-center text-center p-2 text-white rounded-full" :href="item.link">
                <img width="24" src="../../../assets/arrow-black.svg" alt="">
            </a>
        </div>
    </div>
</template>
<script setup>

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
</script>
<style scoped></style>