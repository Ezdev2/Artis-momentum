<script setup>
import Navbar from "./components/Layouts/Navbar.vue";
import Footer from "./components/Layouts/Footer.vue";
import { useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from 'vue';

const route = useRouter();

const showScrollButton = ref(false);

const checkScroll = () => {
  showScrollButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <div class="flex flex-col overflow-hidden">
    <Navbar
      class="fixed w-full"
    />
    <router-view class="mt-[86px]" v-slot="{ Component }">
      <transition appear name="fade-page" mode="out-in">
        <component class="bodypage" :is="Component" />
      </transition>
    </router-view>
    <Footer
      class="footer"
    />

    <button 
      v-show="showScrollButton" 
      @click="scrollToTop" 
      class="scroll-to-top-btn"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  </div>
</template>

<style lang="scss" scoped>
.fade-page-enter-active,
.fade-page-leave-active {
  transition: all 0.4s ease;
  visibility: hidden;
  transition-delay: 0.1s;
}

.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;
  visibility: visible;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.scroll-to-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 70px;
  font-size: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s, visibility 0.3s;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
}
</style>