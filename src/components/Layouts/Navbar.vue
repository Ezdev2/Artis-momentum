<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, onUnmounted, ref } from "vue";

const router = useRouter();
const route = useRoute();
const isScrolling = ref(false);

onMounted(() => {
    isVisible.value = false;
});

const isVisible = ref(false);

const checkFocusedLink = (link) => {
    const isOnRoute = [link].includes(route.path);
    if (isOnRoute) {
        return true;
    }
};

const checkScroll = () => {
    isScrolling.value = window.scrollY > 10;
};

onMounted(() => {
    window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
});

function gotTo(link) {
    router.push(link);
}
</script>

<template>
    <div class="navbar w-full">
        <div
            :class="['flex flex-row items-center justify-between', isScrolling ? 'nav-scrolling my-[16px] mx-[24px] pl-8 pr-2 py-1.5 rounded-[18px]' : 'bg-secondary lg:px-[122px] px-[24px] py-4 w-full']">
            <div>
                <a href="/" class="font-[800] text-[#fff]">
                    ARTIS MOMENTUM
                </a>
            </div>
            <div class="xl:flex flex-row items-center gap-[34px] justify-center hidden text-[#fff]">
                <a href="/" :class="'cursor-pointer' + !checkFocusedLink('/') ? 'nav-list' : 'text-primary'
                    ">
                    Accueil
                </a>
                <a href="/#service" :class="'cursor-pointer' + !checkFocusedLink('/') ? 'nav-list' : 'text-primary'
                    ">
                    Nos services
                </a>
                <a href="/formation" :class="'cursor-pointer' + !checkFocusedLink('/')
                    ? 'nav-list'
                    : 'text-primary'
                    ">
                    Formations
                </a>
                <a href="/#ressource" :class="'cursor-pointer' + !checkFocusedLink('/')
                    ? 'nav-list'
                    : 'text-primary'
                    ">
                    Ressources
                </a>
                <a href="/#about" :class="'cursor-pointer' + !checkFocusedLink('/') ? 'nav-list' : 'text-primary'
                    ">
                    Qui sommes-nous
                </a>
            </div>
            <div class="flex flex-row items-center justify-end gap-[4px]">
                <button :class="['flex flex-row items-center gap-3 bg-transparent min-w-[fit-content]', isScrolling ? 'px-4 py-1.5 rounded-[12px]' : '' ]" @click="logIn">
                    <img src="@/assets/user.svg" alt="" />
                    <span class="hidden md:block min-w-[96px] text-white">Se connecter</span>
                </button>
                <button
                    :class="['hidden xl:flex items-center justify-center bg-black text-white hover:text-primary hover:bg-transparent focus:bg-transparent focus:outline-none', isScrolling ? 'px-4 py-1.5 rounded-[12px]' : 'px-6 py-3.5']"
                    @click="gotTo('/contact')">
                    <span class="min-w-[130px]">Nous contacter</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar {
    z-index: 9999;
}
.nav-scrolling {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}
.nav-list {
    cursor: pointer;

    &:hover {
        color: var(--color-primary);
    }
}

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
</style>