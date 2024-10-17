<template>
    <div class="flex flex-col gap-12">
        <!-- Section Financements -->
        <div class="flex flex-col gap-4 ">
            <h3 class="text-left text-white font-bold">Financements</h3>
            <hr class="text-blackScale">
            <div class="flex flex-col gap-4 text-white">
                <div v-for="(item, index) in financements" :key="'financement-' + index" class="glassMorphism p-4 text-left rounded-lg shadow-lg">
                    <h4 class="text-xl font-semibold text-white">{{ item.title }}</h4>
                    <p class="text-gray mt-2 desc">{{ item.description }}</p>
                    <a :href="item.link" class="mt-4 inline-block bg-white text-primary py-2 px-4 rounded hover:bg-primary hover:text-white transition">En savoir plus</a>
                </div>
            </div>
        </div>

        <!-- Section Certifications -->
        <div class="flex flex-col gap-4 ">
            <h3 class="text-left text-white font-bold">Certifications</h3>
            <hr class="text-blackScale">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                <div v-for="(item, index) in certifications" :key="'certification-' + index" class="linear p-4 text-left rounded-lg shadow-lg">
                    <h4 class="text-xl font-semibold text-white">{{ item.title }}</h4>
                    <p class="text-gray mt-2 desc">{{ item.description }}</p>
                    <a :href="item.link" class="mt-4 inline-block bg-secondary text-white py-2 px-4 rounded hover:bg-primary hover:text-white transition">En savoir plus</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const financements = ref([
  {
    title: "Financement pour la Formation",
    description: "L’avenir de votre entreprise passe par la croissance continue de vos équipes. Ce financement vous permet d’accompagner vos collaborateurs dans leur développement professionnel en leur offrant l’accès à des formations adaptées à leurs besoins et à ceux de l’entreprise. En investissant dans la montée en compétences, vous garantissez une meilleure performance individuelle et collective, tout en favorisant l’innovation et la compétitivité à long terme.",
    link: "/funding"
  },
  {
    title: "Investissez dans l'Avenir de Vos Équipes",
    description: "L’avenir de votre entreprise passe par la croissance continue de vos équipes. Ce financement vous permet d’accompagner vos collaborateurs dans leur développement professionnel en leur offrant l’accès à des formations adaptées à leurs besoins et à ceux de l’entreprise. En investissant dans la montée en compétences, vous garantissez une meilleure performance individuelle et collective, tout en favorisant l’innovation et la compétitivité à long terme.",
    link: "/funding"
  }
]);

const certifications = ref([
  {
    title: "Obtenez une Certification Reconnu dans Votre Domaine",
    description: "Description du Certification 1. Vous pouvez ici mettre les détails sur les critères, le montant, et la procédure de demande.",
    link: "/certification"
  },
  {
    title: "Investissez dans Votre Avenir avec une Certification",
    description: "Description du Certification 2. Inclure les informations spécifiques à ce financement comme la période de demande et les critères d'éligibilité.",
    link: "/certification"
  },
  {
    title: "Investissez dans Votre Avenir avec une Certification",
    description: "Description du Certification 2. Inclure les informations spécifiques à ce financement comme la période de demande et les critères d'éligibilité.",
    link: "/certification"
  },
  {
    title: "Obtenez une Certification Reconnu dans Votre Domaine",
    description: "Description du Certification 2. Inclure les informations spécifiques à ce financement comme la période de demande et les critères d'éligibilité.",
    link: "/certification"
  }
]);
</script>

<style scoped>
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
