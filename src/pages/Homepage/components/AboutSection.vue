<template>
  <div class="py-[122px] px-[24px] sm:px-[122px] bg-secondary flex flex-col gap-6 justify-center">
    <div class="flex flex-col gap-2">
      <p class="font-bold text-blackScale uppercase">Qui sommes-nous ?
      </p>
      <h2 class="font-bold text-primary">A propos de artis Momentum, le spécialiste de la formation des commerciaux
      </h2>
    </div>

    <div>
      <div class="box-area">
        <div class="box flex gap-2"
          :style="{ backgroundImage: 'url(' + item.image + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }"
          v-for="(item, index) in boxes" :key="index" :class="{ active: activeIndex === index }"
          @click="setActive(index)">
          <!-- <img :src="item.image" alt="img" /> -->
          <div class="absolute bottom-2 flex items-end gap-4 p-4">
            <div class="icon">
              <Icon class="h-6 w-6" :icon="item.icon" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-left">{{ item.title }}</h2>
              <p class="text-left w-[300px] w-[300px] md:w-[600px] lg:w-[800px] overflow-hidden text-ellipsis whitespace-nowrap">{{
                item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col items-center">
      <button
        class="w-full md:max-w-[200px] flex gap-4 justify-center items-center text-center px-6 py-3.5 text-white bg-primary hover:bg-secondary"
        @click="goTo('/about')">
        <span>En savoir plus</span>
        <img width="12" src="../../../assets/arrow.svg" alt="">
      </button>
    </div>
  </div>

</template>
<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useRouter } from "vue-router";

const router = useRouter();

// Reactive state
const activeIndex = ref(0);

// Boxes data
const boxes = [
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
  },
];

// Method to set the active box
function setActive(index) {
  activeIndex.value = index;
}

function goTo(link) {
    router.push(link)
}
</script>

<style lang="scss" scoped>
.box-area {
  width: 100%;
  height: 620px;
  justify-content: center;
  align-items: center;
  @apply flex flex-col md:flex-row gap-4 md:gap-0;
}

.box {
  // width: 120px;
  height: 600px;
  // margin-right: 20px;
  @apply w-1/2 md:w-[120px] md:mr-[20px];
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  transition: all linear 1s;
}

.box:last-child {
  margin-right: 0;
}

.box::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}

.box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.box {
  .icon {
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    font-size: 20px;
  }
}

.box h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 25px;
  color: #f6f6f6;
  font-weight: 600;
  opacity: 0;
  transition: all linear 0.3s;
}

.box p {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #f6f6f6;
  opacity: 0;
  transition: all linear 0.3s;
}

.box.active h2 {
  opacity: 1;
}

.box.active p {
  opacity: 1;
}

.active {
  @apply w-full md:w-full;
  transition: all linear 1s;
}
</style>