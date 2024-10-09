<template>
  <!-- Hero -->
  <div class="home h-[100vh]">
    <!-- Hero Side images -->
    <div class="home__line">
      <img width="560px" src="../../assets/hero-img.svg" alt="" />
    </div>
    <!-- Hero Banner Text -->
    <div class="home__text mx-[24px] lg:mx-[122px] flex flex-col gap-4 justify-center items-center max-w-[1420px]">
      <div class="flex flex-col gap-6 items-center lg:items-start">
        <h1 class="text-center lg:text-left font-bold">Optimisez vos
          performances
          commerciales
        </h1>
        <p class="text-center lg:text-left">+1 000 entreprises de toutes tailles font appel à nos formations commerciales pour augmenter la performance
          de leur force de vente.</p>
        <div class="flex gap-2 flex-col md:flex-row">
          <button class="flex gap-2 items-center text-center px-6 py-3.5 bg-[#3a3a3a] text-white" @click="signUp">
            <img src="../../assets/arrow.svg" alt="">
            <span>
              Découvrir nos formations
            </span>
          </button>
          <button class="text-center px-6 py-3.5 bg-[#fff] text-primary" @click="signUp">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Sections -->
  <Services data-aos="fade-right" data-aos-delay="500"></Services>
  <Formations data-aos="fade-left" data-aos-delay="500"></Formations>
  <About data-aos="fade-right" data-aos-delay="500"></About>
  <Ressources data-aos="fade-left" data-aos-delay="500"></Ressources>

</template>

<script setup>
import Services from './components/ServiceSection.vue';
import Formations from './components/FormationSection.vue';
import About from './components/AboutSection.vue';
import Ressources from './components/RessourceSection.vue';
</script>

<style lang="scss" scoped>
.home {
  background-color: var(--color-secondary);
  @apply flex flex-col gap-6 w-full items-center justify-center w-full;

  &__line {
    position: absolute;
    top: 110px;
    right: 0;
  }
  &__text {
    z-index: 10;
  }
}
</style>