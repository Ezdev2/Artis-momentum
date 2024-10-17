<template>
    <div class="p-[24px] lg:px-[122px] pt-[80px] text-white">
      <h2 class="text-left font-bold text-3xl mb-6 linearBg">Nos Financements</h2>
      
      <!-- Description of Financing Options -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div v-for="(financement, index) in financements" :key="'financement-' + index" class="glassMorphism p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-semibold mb-4">{{ financement.title }}</h3>
          <p class="text-gray-300 mb-4">{{ financement.description }}</p>
          
          <h4 class="text-lg font-semibold mb-2">Détails du Financement</h4>
          <ul class="list-disc pl-5 mb-6">
            <li v-for="(detail, idx) in financement.details" :key="'detail-' + idx">{{ detail }}</li>
          </ul>
  
          <a :href="financement.link" class="bg-primary text-white py-2 px-6 rounded hover:bg-secondary transition">Postuler</a>
        </div>
      </div>
    
      <!-- Separator -->
      <div class="my-12 h-[1px] bg-gray-600"></div>
    
      <!-- Comparison between the two -->
      <div>
        <h3 class="text-2xl font-semibold mb-4">Comparatif des Financements</h3>
        <div class="glassMorphism p-6 rounded-lg shadow-lg">
          <table class="table-auto w-full text-gray-300">
            <thead>
              <tr>
                <th class="px-4 py-2 text-left">Critères</th>
                <th class="px-4 py-2 text-left">Financement pour la Formation</th>
                <th class="px-4 py-2 text-left">Investissez dans l'Avenir de Vos Équipes</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in comparison" :key="'row-' + index">
                <td class="border-t border-gray-700 px-4 py-2">{{ row.criteria }}</td>
                <td class="border-t border-gray-700 px-4 py-2 text-gray">{{ row.financement1 }}</td>
                <td class="border-t border-gray-700 px-4 py-2 text-gray">{{ row.financement2 }}</td>
              </tr>
            </tbody>
          </table>
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
      link: "#",
      details: [
        "Formation à 100% financée pour les entreprises éligibles",
        "Possibilité de formations en ligne et en présentiel",
        "Accès à des formateurs experts dans leur domaine",
        "Formations personnalisées pour répondre aux besoins spécifiques de vos équipes",
        "Investir dans la formation pour une meilleure performance collective"
      ]
    },
    {
      title: "Investissez dans l'Avenir de Vos Équipes",
      description: "L’avenir de votre entreprise passe par la croissance continue de vos équipes. Ce financement vous permet d’accompagner vos collaborateurs dans leur développement professionnel en leur offrant l’accès à des formations adaptées à leurs besoins et à ceux de l’entreprise. En investissant dans la montée en compétences, vous garantissez une meilleure performance individuelle et collective, tout en favorisant l’innovation et la compétitivité à long terme.",
      link: "#",
      details: [
        "Formations accessibles à distance ou en entreprise",
        "Exemples de formations : Leadership, Gestion de projet, Communication",
        "Réduction d’impôt possible pour certaines entreprises",
        "Accompagnement personnalisé pour la mise en place des formations",
        "Investir dans les compétences de demain pour une compétitivité accrue"
      ]
    }
  ]);
  
  const comparison = ref([
    {
      criteria: "Eligibilité",
      financement1: "Entreprises éligibles à la formation continue",
      financement2: "Entreprises souhaitant investir dans leurs équipes"
    },
    {
      criteria: "Types de Formations",
      financement1: "Formations en ligne et en présentiel",
      financement2: "Formations à distance et sur site"
    },
    {
      criteria: "Accompagnement",
      financement1: "Formation adaptée aux besoins spécifiques",
      financement2: "Accompagnement sur mesure"
    },
    {
      criteria: "Support",
      financement1: "Support par formateurs qualifiés",
      financement2: "Support sur la gestion des formations et financement"
    }
  ]);
  </script>
  
  <style scoped>
  .glassMorphism {
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .table-auto {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table-auto th, .table-auto td {
    padding: 8px;
    text-align: left;
  }
  
  .list-disc {
    list-style-type: disc;
  }
  </style>
  