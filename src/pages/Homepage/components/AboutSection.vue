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
        @click="goTo('/')">
        <span>En savoir plus</span>
        <img width="12" src="../../../assets/arrow.svg" alt="">
      </button>
    </div>
  </div>

</template>
<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

// Reactive state
const activeIndex = ref(0);

// Boxes data
const boxes = [
  {
    image: 'https://images.pexels.com/photos/15149190/pexels-photo-15149190/free-photo-of-apprendre-le-volley-ball.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
    icon: "mdi:company",
    title: 'Recrutement',
    description: "Depuis 15 ans, nos +100 recruteurs trouvent les meilleurs potentiels partout en France et dans tous les secteurs d'activité. Fonctions commerciales, marketing et executive search."
  },
  {
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
    icon: 'mingcute:house-line',
    title: 'Formation',
    description: "Artis Momentum est l'organisme de formation spécialisé dans la vente. Améliorez les performances commerciales de votre équipe grâce à 14 programmes pensés et délivrés par des pros de la vente."
  },
  {
    image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
    icon: 'heroicons:fire',
    title: 'Coaching Commercial',
    description: "Révélez toute la puissance de votre équipe commerciale : coacher vos managers et vos commerciaux est le meilleur moyen de maximiser leur productivité et leur motivation ! Découvrez notre méthode de coaching."
  },
  {
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&dpr=1',
    icon: 'uil:user',
    title: 'Conseil',
    description: "Uptoo est le 1er cabinet de transformation commerciale. Nos consultants vous aident à construire la bonne méthode de vente qui allie productivité et efficacité."
  }
];

// Method to set the active box
function setActive(index) {
  activeIndex.value = index;
}

function goTo(link) {
  console.log(link);
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