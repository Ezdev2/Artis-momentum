<template>
    <div class="p-[24px] lg:px-[122px] pt-[80px] text-white">
      <h2 class="text-left font-bold text-3xl mb-6 linearBg">Certifications</h2>
      
      <!-- Liste des Certifications -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div v-for="(certification, index) in certifications" :key="'certification-' + index" class="glassMorphism p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-semibold mb-4">{{ certification.title }}</h3>
          <p class="text-gray-300 mb-4">{{ certification.description }}</p>
  
          <h4 class="text-lg font-semibold mb-2">Détails de la Certification</h4>
          <ul class="list-disc pl-5 mb-6">
            <li><strong>Prix:</strong> {{ certification.price }}</li>
            <li><strong>Durée:</strong> {{ certification.duration }}</li>
            <li><strong>Critères d'Éligibilité:</strong></li>
            <ul class="list-disc pl-8">
              <li v-for="(criterion, idx) in certification.eligibilityCriteria" :key="'criterion-' + idx">{{ criterion }}</li>
            </ul>
          </ul>
  
          <a :href="certification.link" class="bg-primary text-white py-2 px-6 rounded hover:bg-secondary transition">Commencer maintenant</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const certifications = ref([
    {
      title: "Obtenez une Certification Reconnu dans Votre Domaine",
      description: "Cette certification vous permet de démontrer vos compétences dans un domaine reconnu. Que vous soyez professionnel ou en début de carrière, cette certification est un atout précieux pour votre avenir.",
      price: "500€",
      duration: "6 mois",
      eligibilityCriteria: [
        "Avoir une expérience dans le domaine d'au moins 2 ans",
        "Avoir suivi une formation préalable dans le domaine",
        "Réussir un examen final"
      ],
      link: "/formation"
    },
    {
      title: "Investissez dans Votre Avenir avec une Certification",
      description: "Une certification qui vous aidera à monter en compétences dans votre secteur d'activité. Augmentez vos chances de trouver des opportunités professionnelles.",
      price: "400€",
      duration: "4 mois",
      eligibilityCriteria: [
        "Être salarié ou à la recherche d'emploi",
        "Avoir un niveau d'études minimum de bac+2",
        "Passer un test d'entrée"
      ],
      link: "/formation"
    },
    {
      title: "Certification en Gestion de Projet",
      description: "Une certification complète pour tous ceux qui souhaitent améliorer leur gestion de projets, de la planification à l'exécution.",
      price: "750€",
      duration: "8 mois",
      eligibilityCriteria: [
        "Expérience dans la gestion de projets",
        "Suivre un cours préalable en gestion",
        "Validation d'un projet final"
      ],
      link: "/formation"
    },
    {
      title: "Certification en Développement Web",
      description: "Devenez expert en développement web avec cette certification qui vous prépare à maîtriser les technologies web modernes.",
      price: "600€",
      duration: "12 mois",
      eligibilityCriteria: [
        "Connaissances de base en programmation",
        "Suivre un module de pré-requis",
        "Passer un examen en ligne"
      ],
      link: "/formation"
    }
  ]);
  </script>
  
  <style scoped>
  .glassMorphism {
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .list-disc {
    list-style-type: disc;
  }
  
  .table-auto {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table-auto th, .table-auto td {
    padding: 8px;
    text-align: left;
  }
  </style>
  