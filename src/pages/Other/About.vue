<template>
  <div class="p-[24px] lg:px-[122px] pt-[80px] text-white">
    <!-- Section Qui sommes-nous -->
    <h2 class="text-left font-bold mb-6 linearBg">Qui sommes-nous ?</h2>

    <section class="mb-12">
      <h3 class="text-xl font-semibold mb-4">Notre mission</h3>
      <p class="text-gray-300">
        Chez Artis Momentum, nous croyons en l'importance de la stratégie et de l'exécution pour réussir. Notre mission
        est d'aider les entreprises à maximiser leur potentiel, en leur fournissant des solutions sur mesure qui
        combinent expertise commerciale, stratégie de communication, et performance commerciale.
      </p>
    </section>

    <section class="mb-12">
      <h3 class="text-xl font-semibold mb-4">Ce que nous faisons</h3>
      <p class="text-gray-300">
        Nous proposons des services de direction commerciale, de stratégie de communication, de formation en vente, de
        gestion informatique, de recrutement et de mentorat. Chaque service est conçu pour répondre aux besoins uniques
        de chaque entreprise et pour stimuler une croissance durable à long terme.
      </p>
    </section>

    <!-- Notre Histoire -->
    <section class="flex flex-col gap-4">
      <h3 class="text-xl font-semibold mb-4">Notre histoire</h3>
      <div class="ml-6 p-6 rounded-lg glassMorphism">
        <div class="flex justify-between items-center" @click="toggleSection('history1')">
          <p class="text-primary text-lg">Nos débuts</p>
          <Icon icon="ic:baseline-plus" width="24" height="24" style="color: white" />
        </div>
        <p v-if="isSectionOpen('history1')" class="text-gray-300 mt-2">
          Fondée en 2024, Artis momentum a été créée avec l'objectif de fournir aux entreprises les outils nécessaires
          pour exceller dans leurs activités commerciales. Depuis nos débuts, nous avons toujours mis l'accent sur
          l'accompagnement personnalisé et l'optimisation des processus commerciaux.
        </p>
      </div>

      <div class="ml-6 p-6 rounded-lg glassMorphism">
        <div class="flex justify-between items-center" @click="toggleSection('history2')">
          <p class="text-primary text-lg">Notre évolution</p>
          <Icon icon="ic:baseline-plus" width="24" height="24" style="color: white" />
        </div>
        <p v-if="isSectionOpen('history2')" class="text-gray-300 mt-2">
          Au fil des années, nous avons évolué en fonction des besoins du marché, en ajoutant des services tels que la
          formation commerciale, le recrutement et le mentorat, pour accompagner nos clients dans tous les aspects de
          leur développement.
        </p>
      </div>

      <div class="ml-6 p-6 rounded-lg glassMorphism">
        <div class="flex justify-between items-center"  @click="toggleSection('history3')">
          <p class="text-primary text-lg">Notre vision</p>
          <Icon icon="ic:baseline-plus" width="24" height="24"
            style="color: white" />
        </div>
        <p v-if="isSectionOpen('history3')" class="text-gray-300 mt-2">
          Nous nous engageons à offrir à nos clients des solutions innovantes et adaptées à leurs besoins, afin de
          stimuler une croissance continue et durable. Nous croyons fermement que chaque entreprise est unique, et notre
          approche est toujours personnalisée.
        </p>
      </div>
    </section>

    <!-- Section FAQ -->
    <section class="mt-12">
      <h2 class="text-left font-bold text-3xl mb-6 linearBg">FAQ - Questions fréquemment posées</h2>
      <div class="space-y-6">
        <div v-for="(faq, index) in faqs" :key="'faq-' + index" class="bg-gray-800 p-6 rounded-lg">
          <h4 class="font-semibold text-xl linearSecondaryBg">{{ faq.question }}</h4>
          <p class="text-gray mt-2">{{ faq.answer }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

// Variable pour les sections ouvertes de l'histoire
const openSections = ref({
  history1: false,
  history2: false,
  history3: false,
});

// Fonction pour basculer la visibilité des sections
function toggleSection(section) {
  openSections.value[section] = !openSections.value[section];
}

// Fonction pour vérifier si une section est ouverte
function isSectionOpen(section) {
  return openSections.value[section];
}

// FAQ section content
const faqs = ref([
  {
    question: "Quels sont les services que vous proposez ?",
    answer: "Nous proposons des services dans la direction commerciale, la stratégie d'expression, les formations en vente, l'informatique, le recrutement et le mentorat. Chaque service est personnalisé pour répondre aux besoins spécifiques de votre entreprise."
  },
  {
    question: "Comment puis-je réserver une consultation ?",
    answer: "Vous pouvez réserver une consultation en visitant notre page de réservation. Nous vous fournirons un accompagnement personnalisé selon vos besoins spécifiques."
  },
  {
    question: "Offrez-vous des formations en ligne ?",
    answer: "Oui, nous proposons des formations en ligne interactives et personnalisées pour renforcer vos équipes commerciales. Ces formations sont accessibles à distance et peuvent être adaptées selon vos objectifs."
  },
  {
    question: "Quels secteurs couvrez-vous ?",
    answer: "Nous intervenons dans divers secteurs, notamment le commerce, le marketing, la technologie, l'informatique, et bien d'autres. Nous adaptons nos solutions à vos spécificités sectorielles."
  }
]);

</script>

<style scoped>
.underline {
  text-decoration: underline;
}

</style>
