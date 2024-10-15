<template>
  <!-- Hero -->
  <div class="home h-[100vh]">
    <!-- Hero Side images -->
    <div class="home__line top-[180px] lg:top-[110px] right-[0] lg:right-[122px]">
      <img width="560px" src="../../assets/hero-img.svg" alt="" />
    </div>
    <!-- Hero Banner Text -->
    <div class="home__text mx-[24px] lg:mx-[122px] flex flex-col gap-4 justify-center items-center max-w-[1420px]">
      <div class="flex flex-col gap-6 items-center lg:items-start w-full">
        <h1 class="text-white text-center lg:text-left font-bold w-full"> Optimisez <br>vos
          <span class="linearBg">performances <br></span>
          commerciales
        </h1>
        <p class="text-center lg:text-left text-white">+1 000 entreprises de toutes tailles font appel à nos formations commerciales pour augmenter la performance
          de leur force de vente.</p>
        <div class="flex gap-2 flex-col md:flex-row">
          <button class="flex gap-2 items-center text-center px-6 py-3.5 linear text-white" @click="goTo('/formation')">
            <img src="../../assets/arrow.svg" alt="">
            <span>
              Découvrir nos formations
            </span>
          </button>
          <button class="text-center px-6 py-3.5 bg-[#fff] text-primary" @click="goTo('/book')">
            Voir les livres
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Sections -->
  <Services id="service" data-aos="fade-up" data-aos-delay="500"></Services>
  <Formations id="formation" data-aos="fade-up" data-aos-delay="500"></Formations>
  <About id="about" data-aos="fade-up" data-aos-delay="500"></About>
  <Ressources id="ressource" data-aos="fade-up" data-aos-delay="500"></Ressources>

</template>

<script setup>
import Services from './components/ServiceSection.vue';
import Formations from './components/FormationSection.vue';
import About from './components/AboutSection.vue';
import Ressources from './components/RessourceSection.vue';
import { useRouter } from "vue-router";

const router = useRouter();

function goTo(link) {
    router.push(link)
}
</script>

<style lang="scss" scoped>
.home {
  background-color: var(--color-secondary);
  @apply flex flex-col gap-6 justify-center w-full;

  &__line {
    position: absolute;
    // top: 110px;
    // right: 122px;
  }
  &__text {
    z-index: 10;
  }
}
</style>