<template>
    <div class="p-[24px] lg:px-[122px] pt-[80px] text-white">
      <h2 class="text-left font-bold text-3xl mb-6 linearBg">Qui sommes-nous ?</h2>
      
      <!-- Section des Boîtes -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(box, index) in boxes" :key="'box-' + index" class="glassMorphism p-6 rounded-lg shadow-lg">
          <img :src="box.image" alt="Image" class="w-full h-48 object-cover rounded-t-lg mb-4">
          <div class="flex items-center mb-4">
            <i :class="box.icon + ' text-primary text-4xl mr-3'"></i>
            <h3 class="text-xl font-semibold">{{ box.title }}</h3>
          </div>
          <p class="text-gray-300">{{ box.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const boxes = ref([
    {
      image: 'https://images.pexels.com/photos/15149190/pexels-photo-15149190/free-photo-of-apprendre-le-volley-ball.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
      icon: "mdi:company",
      title: 'La Direction commerciale',
      description: "La direction commerciale est le socle qui permet le développement du chiffre d’affaires de votre entreprise !"
    },
    {
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
      icon: 'mingcute:house-line',
      title: "La Stratégie d'expression",
      description: "Avant de penser à une stratégie de communication, si vous mettiez en place une réelle stratégie d’expression ?"
    },
    {
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
      icon: 'heroicons:fire',
      title: 'Les formations vente',
      description: "Notre équipe est passionnée par les métiers de la vente et la quête de l’excellence dans la relation client !"
    },
    {
      image: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
      icon: 'icon-park-outline:code-computer',
      title: 'Le service informatique',
      description: "Un service informatique opérationnel 7/7. Reposez-vous et optez pour la tranquillité !"
    },
    {
      image: 'https://images.pexels.com/photos/5439453/pexels-photo-5439453.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
      icon: 'lucide:handshake',
      title: 'Le Recrutement',
      description: "Ne recrutez plus au feeling, sans plan d’action, par faute de temps, de moyens, de connaissances… !"
    },
    {
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
      icon: 'uil:user',
      title: 'Le mentorat',
      description: "Le mentorat chez Artis Momentum est né d’une envie de partage, de transmettre un savoir-faire à travers un savoir-être exceptionnel."
    }
  ]);
  </script>
  
  <style scoped>
  /* Custom styling for the page */
  .glassMorphism {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .list-disc {
    list-style-type: disc;
  }
  
  .text-primary {
    color: #4CAF50; /* Primary color */
  }
  
  .text-gray-300 {
    color: #E2E8F0; /* Lighter gray for text */
  }
  </style>
  