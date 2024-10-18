<template>
    <div class="p-[24px] lg:px-[122px] pt-[80px] text-white">
      <h2 class="text-left font-bold mb-6 linearBg">Qui sommes-nous ?</h2>
  
      <div :class="selectedService ? 'grid grid-cols-3 gap-8' : ''">
        <!-- Ce bloc n'existe pas si aucun service n'est sélectionné -->
        <div v-if="selectedService" class="col-span-2 transition">
          <div class="glassMorphism p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold mb-4">{{ selectedService.title }}</h3>
            <img :src="selectedService.image" alt="Service Image" class="w-full h-48 object-cover rounded-t-lg mb-4">
            <p class="text-gray-300 mb-4">{{ selectedService.description }}</p>
            <div v-html="selectedService.detailText" class="text-gray-300 mb-4"></div>
  
            <!-- En savoir plus (dynamique depuis le champ `moreInfo`) -->
            <p class="text-gray-300 mb-2">En savoir plus :</p>
            <ul class="list-disc ml-6">
              <li v-for="(item, index) in selectedService.moreInfo" :key="'item-' + index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Listes des services (le grid se transforme en une colonne si un service est sélectionné) -->
        <div :class="{ 'grid-cols-1': selectedService, 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': !selectedService }"
          class="grid gap-8">
          <div v-for="(box, index) in boxes" :key="'box-' + index"
            class="glassMorphism p-6 rounded-lg shadow-lg cursor-pointer" @click="selectService(box)">
            <img :src="box.image" alt="Image"
              :class="['w-full object-cover rounded-t-lg mb-4', selectedService ? 'h-24' : 'h-48']">
            <div class="flex items-center">
              <i :class="box.icon + ' text-primary text-4xl mr-3'"></i>
              <h3 class="text-xl font-semibold">{{ box.title }}</h3>
            </div>
            <p v-if="!selectedService" class="text-gray-300 mt-4">{{ box.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Box content with services, adding `detailText` and `moreInfo` fields
  const boxes = ref([
    {
      image: 'https://images.pexels.com/photos/15149190/pexels-photo-15149190/free-photo-of-apprendre-le-volley-ball.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
      icon: "mdi:company",
      title: 'La Direction commerciale',
      description: "La direction commerciale est le socle qui permet le développement du chiffre d’affaires de votre entreprise !",
      detailText: `
        <p>
      <strong class="linearSecondaryBg">Une approche stratégique et orientée résultats</strong>
    </p>
    <p>
      Avec une approche axée sur la <span class="text-accent">stratégie</span> et les <span class="text-accent">résultats</span>, notre équipe vous aide à élaborer des plans d’action sur mesure. Ces plans sont conçus pour accroître vos ventes et optimiser vos relations commerciales, avec des solutions adaptées aux besoins spécifiques de votre entreprise.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Une méthode structurée et personnalisée</strong>
    </p>
    <p>
      Notre équipe de professionnels expérimentés adopte une méthode rigoureuse et bien structurée pour accompagner votre entreprise dans la définition de stratégies commerciales sur mesure. Nous comprenons que chaque organisation a des besoins uniques, et c’est pourquoi nous nous concentrons sur l’analyse approfondie de vos objectifs, de votre marché cible et de vos processus internes afin de vous fournir des solutions optimisées.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Développement de relations durables</strong>
    </p>
    <p>
      En travaillant en étroite collaboration avec vous, nous développons des plans d’action stratégiques. Ces plans visent non seulement à augmenter vos ventes de manière tangible, mais aussi à améliorer la qualité de vos interactions avec vos clients et partenaires. L’objectif est d'établir des relations durables et profitables, en favorisant une meilleure compréhension de vos produits ou services et en offrant des expériences client personnalisées.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Des leviers de croissance sur mesure</strong>
    </p>
    <p>
      Grâce à notre expertise, nous vous aiderons à identifier les <span class="text-accent">leviers de croissance</span> spécifiques à votre entreprise. Nous travaillerons avec vous pour optimiser vos canaux de vente et mettre en œuvre des actions concrètes visant à stimuler vos performances commerciales. Que ce soit par des formations ciblées pour vos équipes, une gestion affinée de vos outils CRM, ou encore par des analyses approfondies de vos processus de vente, nous vous assurons un accompagnement complet et personnalisé.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Notre engagement : une croissance continue et durable</strong>
    </p>
    <p>
      En somme, notre mission est de vous fournir les outils et le soutien nécessaires pour non seulement atteindre vos objectifs de chiffre d’affaires, mais aussi renforcer vos relations commerciales et établir une base solide pour une croissance continue et durable.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Prêt à faire avancer votre entreprise ?</strong>
    </p>
    <p>
      Si vous souhaitez en savoir plus sur nos services ou discuter d'une stratégie sur mesure pour votre entreprise, n'hésitez pas à <a href="/book" class="linearSecondaryBg underline">réserver une consultation avec nous</a>.
    </p>
      `,
      moreInfo: [
        "Nous vous accompagnons pour un développement sur mesure.",
        "Des solutions personnalisées pour chaque aspect de votre activité.",
        "Une expertise technique et humaine à votre service."
      ]
    },
    {
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
      icon: 'mingcute:house-line',
      title: "La Stratégie d'expression",
      description: "Avant de penser à une stratégie de communication, si vous mettiez en place une réelle stratégie d’expression ?",
      detailText: `
    <p>
      <strong class="linearSecondaryBg">La Stratégie d'Expression : Une Identité Cohérente</strong>
    </p>
    <p>
      Une <span class="text-accent">bonne stratégie d'expression</span> repose sur la création d'une identité forte et cohérente. Cette identité doit se refléter dans tous les aspects de la communication de l'entreprise, qu'il s'agisse de la communication interne, entre les équipes, ou de la communication externe, avec les clients, partenaires et le grand public.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Pourquoi une identité forte est-elle essentielle ?</strong>
    </p>
    <p>
      L'identité d'une entreprise est le pilier de sa reconnaissance sur le marché. Elle permet de différencier votre marque des autres, de créer des liens émotionnels avec vos clients, et de renforcer la confiance et la fidélité envers vos produits ou services. Une stratégie d'expression réussie contribue à une perception positive et cohérente, à chaque point de contact avec votre entreprise.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Les éléments clés de votre stratégie de communication</strong>
    </p>
    <p>
      <span class="text-accent">1. Création d'une identité visuelle forte :</span> L'identité visuelle est l'élément le plus immédiat de votre stratégie. Elle inclut le logo, les couleurs, la typographie, et tous les autres éléments graphiques qui représentent votre marque. Ces éléments doivent être cohérents sur tous vos supports de communication.
    </p>
    
    <p>
      <span class="text-accent">2. Amélioration de la communication interne :</span> Une bonne stratégie d'expression commence à l'intérieur de l'entreprise. Assurez-vous que vos équipes partagent une vision commune et utilisent un langage et des outils de communication cohérents, en phase avec l'image que vous souhaitez véhiculer à l'extérieur.
    </p>
    
    <p>
      <span class="text-accent">3. Une communication externe impactante :</span> La manière dont vous vous exprimez vis-à-vis des clients et des partenaires doit être claire, authentique, et fidèle à votre identité de marque. Cela inclut la qualité de vos supports de communication (site web, brochures, réseaux sociaux, etc.) et l'expérience que vous offrez à vos clients à travers des échanges personnalisés.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Développez vos compétences grâce à nos formations</strong>
    </p>
    <p>
      Nous vous proposons des formations complètes sur la stratégie d'expression et la gestion de l'identité visuelle. Ces formations vous aideront à maîtriser l'art de la communication d'entreprise, à créer une image de marque forte et à optimiser vos interactions internes et externes.
    </p>
  
    <p class="text-accent">
      Pour en savoir plus et découvrir nos <a href="/formation" class="linearSecondaryBg underline">formations en stratégie de communication</a>, cliquez ici.
    </p>
  `,
      moreInfo: [
        "Création d'une identité visuelle forte.",
        "Amélioration de la communication interne et externe.",
        "Développement d'une stratégie de marque cohérente."
      ]
    },
    {
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
      icon: 'heroicons:fire',
      title: 'Les formations vente',
      description: "Notre équipe est passionnée par les métiers de la vente et la quête de l’excellence dans la relation client !",
      detailText: `
        <p>
      <strong class="linearSecondaryBg">Des formations sur mesure pour renforcer vos équipes commerciales</strong>
    </p>
    <p>
      Nous proposons des <span class="text-accent">formations interactives</span>, personnalisées et axées sur l’acquisition de compétences pratiques pour renforcer vos équipes commerciales et optimiser leurs performances. Chaque session est conçue pour répondre aux besoins spécifiques de votre entreprise, en tenant compte des défis et objectifs propres à votre secteur.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Un apprentissage actif et orienté résultats</strong>
    </p>
    <p>
      Nos formations ne se contentent pas de transmettre des connaissances théoriques, elles sont avant tout <span class="text-accent">pratiques et interactives</span>. Nous mettons l'accent sur des exercices en situation réelle, des études de cas, et des simulations afin de permettre à vos équipes de mettre en œuvre immédiatement ce qu'elles ont appris.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Optimisation des performances commerciales</strong>
    </p>
    <p>
      En formant vos collaborateurs, nous visons à améliorer non seulement leurs compétences en vente, mais aussi leur capacité à établir des relations durables avec vos clients. Nos formations sont conçues pour vous aider à maximiser vos opportunités commerciales, augmenter votre taux de conversion et booster la satisfaction client.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Une formation continue et un suivi personnalisé</strong>
    </p>
    <p>
      Nous ne nous arrêtons pas après la formation initiale. Un suivi personnalisé est prévu pour vous assurer que les compétences acquises sont mises en pratique et continuellement améliorées. En fonction de vos besoins, nous proposons également des sessions de coaching pour accompagner vos équipes dans leur développement à long terme.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Prêt à renforcer vos équipes commerciales ?</strong>
    </p>
    <p>
      Pour en savoir plus sur nos formations, ou pour réserver une session adaptée à votre équipe, <a href="/book" class="linearSecondaryBg underline">voir nos livres dès maintenant</a>.
    </p>
      `,
      moreInfo: [
        "Formations sur les techniques de vente.",
        "Amélioration des relations clients.",
        "Stratégies pour booster les performances des équipes."
      ]
    },
    {
      image: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
      icon: 'icon-park-outline:code-computer',
      title: 'Le service informatique',
      description: "Un service informatique opérationnel 7/7. Reposez-vous et optez pour la tranquillité !",
      detailText: `
        <p>
      <strong class="linearSecondaryBg">Des formations sur mesure pour renforcer vos équipes commerciales</strong>
    </p>
    <p>
      Nous proposons des <span class="text-accent">formations interactives</span>, personnalisées et axées sur l’acquisition de compétences pratiques pour renforcer vos équipes commerciales et optimiser leurs performances. Chaque session est conçue pour répondre aux besoins spécifiques de votre entreprise, en tenant compte des défis et objectifs propres à votre secteur.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Un apprentissage actif et orienté résultats</strong>
    </p>
    <p>
      Nos formations ne se contentent pas de transmettre des connaissances théoriques, elles sont avant tout <span class="text-accent">pratiques et interactives</span>. Nous mettons l'accent sur des exercices en situation réelle, des études de cas, et des simulations afin de permettre à vos équipes de mettre en œuvre immédiatement ce qu'elles ont appris.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Optimisation des performances commerciales</strong>
    </p>
    <p>
      En formant vos collaborateurs, nous visons à améliorer non seulement leurs compétences en vente, mais aussi leur capacité à établir des relations durables avec vos clients. Nos formations sont conçues pour vous aider à maximiser vos opportunités commerciales, augmenter votre taux de conversion et booster la satisfaction client.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Une formation continue et un suivi personnalisé</strong>
    </p>
    <p>
      Nous ne nous arrêtons pas après la formation initiale. Un suivi personnalisé est prévu pour vous assurer que les compétences acquises sont mises en pratique et continuellement améliorées. En fonction de vos besoins, nous proposons également des sessions de coaching pour accompagner vos équipes dans leur développement à long terme.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Prêt à renforcer vos équipes commerciales ?</strong>
    </p>
    <p>
      Pour en savoir plus sur nos formations, ou pour réserver une session adaptée à votre équipe, <a href="/book" class="linearSecondaryBg underline">voir nos livres dès maintenant</a>.
    </p>
      `,
      moreInfo: [
        "Maintenance et gestion des systèmes.",
        "Support technique 24/7.",
        "Solutions de sécurité avancées."
      ]
    },
    {
      image: 'https://images.pexels.com/photos/5439453/pexels-photo-5439453.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
      icon: 'lucide:handshake',
      title: 'Le Recrutement',
      description: "Ne recrutez plus au feeling, sans plan d’action, par faute de temps, de moyens, de connaissances… !",
      detailText: `
        <p>
      <strong class="linearSecondaryBg">Des formations sur mesure pour renforcer vos équipes commerciales</strong>
    </p>
    <p>
      Nous proposons des <span class="text-accent">formations interactives</span>, personnalisées et axées sur l’acquisition de compétences pratiques pour renforcer vos équipes commerciales et optimiser leurs performances. Chaque session est conçue pour répondre aux besoins spécifiques de votre entreprise, en tenant compte des défis et objectifs propres à votre secteur.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Un apprentissage actif et orienté résultats</strong>
    </p>
    <p>
      Nos formations ne se contentent pas de transmettre des connaissances théoriques, elles sont avant tout <span class="text-accent">pratiques et interactives</span>. Nous mettons l'accent sur des exercices en situation réelle, des études de cas, et des simulations afin de permettre à vos équipes de mettre en œuvre immédiatement ce qu'elles ont appris.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Optimisation des performances commerciales</strong>
    </p>
    <p>
      En formant vos collaborateurs, nous visons à améliorer non seulement leurs compétences en vente, mais aussi leur capacité à établir des relations durables avec vos clients. Nos formations sont conçues pour vous aider à maximiser vos opportunités commerciales, augmenter votre taux de conversion et booster la satisfaction client.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Une formation continue et un suivi personnalisé</strong>
    </p>
    <p>
      Nous ne nous arrêtons pas après la formation initiale. Un suivi personnalisé est prévu pour vous assurer que les compétences acquises sont mises en pratique et continuellement améliorées. En fonction de vos besoins, nous proposons également des sessions de coaching pour accompagner vos équipes dans leur développement à long terme.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Prêt à renforcer vos équipes commerciales ?</strong>
    </p>
    <p>
      Pour en savoir plus sur nos formations, ou pour réserver une session adaptée à votre équipe, <a href="/book" class="linearSecondaryBg underline">voir nos livres dès maintenant</a>.
    </p>
      `,
      moreInfo: [
        "Recrutement sur mesure pour chaque poste.",
        "Sélection rigoureuse des talents.",
        "Optimisation des processus de recrutement."
      ]
    },
    {
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
      icon: 'uil:user',
      title: 'Le mentorat',
      description: "Le mentorat chez Artis Momentum est né d’une envie de partage, de transmettre un savoir-faire à travers un savoir-être exceptionnel.",
      detailText: `
        <p>
      <strong class="linearSecondaryBg">Des formations sur mesure pour renforcer vos équipes commerciales</strong>
    </p>
    <p>
      Nous proposons des <span class="text-accent">formations interactives</span>, personnalisées et axées sur l’acquisition de compétences pratiques pour renforcer vos équipes commerciales et optimiser leurs performances. Chaque session est conçue pour répondre aux besoins spécifiques de votre entreprise, en tenant compte des défis et objectifs propres à votre secteur.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Un apprentissage actif et orienté résultats</strong>
    </p>
    <p>
      Nos formations ne se contentent pas de transmettre des connaissances théoriques, elles sont avant tout <span class="text-accent">pratiques et interactives</span>. Nous mettons l'accent sur des exercices en situation réelle, des études de cas, et des simulations afin de permettre à vos équipes de mettre en œuvre immédiatement ce qu'elles ont appris.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Optimisation des performances commerciales</strong>
    </p>
    <p>
      En formant vos collaborateurs, nous visons à améliorer non seulement leurs compétences en vente, mais aussi leur capacité à établir des relations durables avec vos clients. Nos formations sont conçues pour vous aider à maximiser vos opportunités commerciales, augmenter votre taux de conversion et booster la satisfaction client.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Une formation continue et un suivi personnalisé</strong>
    </p>
    <p>
      Nous ne nous arrêtons pas après la formation initiale. Un suivi personnalisé est prévu pour vous assurer que les compétences acquises sont mises en pratique et continuellement améliorées. En fonction de vos besoins, nous proposons également des sessions de coaching pour accompagner vos équipes dans leur développement à long terme.
    </p>
  
    <p>
      <strong class="linearSecondaryBg">Prêt à renforcer vos équipes commerciales ?</strong>
    </p>
    <p>
      Pour en savoir plus sur nos formations, ou pour réserver une session adaptée à votre équipe, <a href="/book" class="text-primary underline">voir nos livres dès maintenant</a>.
    </p>
      `,
      moreInfo: [
        "Accompagnement personnalisé pour chaque mentee.",
        "Partage d'expérience et développement personnel.",
        "Mentorat basé sur des valeurs humaines fortes."
      ]
    }
  ]);
  // Variable pour stocker le service sélectionné
  const selectedService = ref(null);
  
  // Fonction pour sélectionner un service
  function selectService(service) {
    selectedService.value = service;
  }
  </script>
  
  <style scoped>
  .list-disc {
    list-style-type: disc;
  }
  </style>
  