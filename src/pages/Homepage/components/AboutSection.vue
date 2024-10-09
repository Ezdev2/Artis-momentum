<template>
  <div class="py-[122px] px-[24px] sm:px-[122px] bg-secondary flex flex-col gap-6 justify-center items-cente">
    <div class="flex flex-col gap-2">
      <p class="font-bold text-primary uppercase">Qui sommes-nous ?
      </p>
      <h2 class="font-bold text-primary">A propos de artis Momentum, le spécialiste de la formation des commerciaux
      </h2>
    </div>

    <div>
      <div class="box-area">
        <div class="box" v-for="(item, index) in boxes" :key="index" :class="{ active: activeIndex === index }"
          @click="setActive(index)">
          <img :src="item.image" alt="img" />
          <!-- <i :class="['fa-solid', item.iconClass]"></i> -->
           <div class="icon">
             <Icon class="h-6 w-6" :icon="item.icon" />
           </div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
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
    image: 'https://images.pexels.com/photos/2837909/pexels-photo-2837909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    icon: "mdi:company",
    title: 'Las Vegas',
    description: 'Lorem ipsum dolor sit amet.'
  },
  {
    image: 'https://images.pexels.com/photos/922978/pexels-photo-922978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    icon: 'mingcute:house-line',
    title: 'Switzerland',
    description: 'Lorem ipsum dolor sit amet.'
  },
  {
    image: 'https://images.pexels.com/photos/3723034/pexels-photo-3723034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    icon: 'heroicons:fire',
    title: 'Amazon Rainforest',
    description: 'Lorem ipsum dolor sit amet.'
  },
  {
    image: 'https://images.pexels.com/photos/10983409/pexels-photo-10983409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    icon: 'uil:user',
    title: 'Siberia',
    description: 'Lorem ipsum dolor sit amet.'
  }
];

// Method to set the active box
function setActive(index) {
  activeIndex.value = index;
}
</script>

<style lang="scss" scoped>
.box-area {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 180px;
  height: 600px;
  margin-right: 20px;
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  transition: all linear 0.6s;
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    position: absolute;
    bottom: 20px;
    left: 10px;
    font-size: 20px;
  }
}

.box:nth-child(1) i {
  color: #ff5200;
}

.box:nth-child(2) i {
  color: #ca470a;
}

.box:nth-child(3) i {
  color: #00d9ff;
}

.box:nth-child(4) i {
  color: #0077ff;
}

.box h2 {
  position: absolute;
  bottom: 30px;
  left: 60px;
  font-family: 'Poppins', sans-serif;
  font-size: 25px;
  color: #f6f6f6;
  font-weight: 600;
  opacity: 0;
  transition: all linear 0.3s;
}

.box p {
  position: absolute;
  bottom: 10px;
  left: 60px;
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
  width: 500px;
  transition: all linear 0.6s;
}
</style>