<template>
  <div class="home h-[100vh]">
    <div class="home__line">
      <img width="600px" src="../../assets/linbe-1.svg" alt="" />
    </div>
    <div class="flex flex-col gap-4 justify-center items-center max-w-[1420px]">
      <div class="flex flex-col gap-6">
        <h1 class="text-left font-bold">Optimisez vos
          performances
          commerciales
        </h1>
        <p>+1 000 entreprises de toutes tailles font appel à nos formations commerciales pour augmenter la performance
          de leur force de vente.</p>
        <div class="flex gap-2">
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
  <div class="h-[100vh] bg-primary flex justify-center items-center" data-aos="fade-right" data-aos-delay="500">
    <h1 class="text-center font-bold text-white">Nos services
    </h1>
  </div>
  <div class="h-[100vh] bg-secondary flex justify-center items-center" data-aos="fade-left" data-aos-delay="500">
    <h1 class="text-center font-bold">Nos formations
    </h1>
  </div>
  <div class="h-[100vh] bg-white flex justify-center items-center" data-aos="fade-right" data-aos-delay="500">
    <h1 class="text-center font-bold">Qui sommes-nous ?
    </h1>
  </div>
  <div class="h-[100vh] bg-primary flex justify-center items-center" data-aos="fade-left" data-aos-delay="500">
    <h1 class="text-center text-white font-bold">Nos ressources
    </h1>
  </div>

</template>

<script>
</script>

<style lang="scss" scoped>
.home {
  background-color: var(--color-secondary);
  @apply flex flex-col gap-6 w-full items-center justify-center w-full;

  &__line {
    position: absolute;
    right: 0;
  }
}

p {
  text-align: left;
}
</style>