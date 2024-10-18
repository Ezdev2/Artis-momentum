<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, onUnmounted, ref } from "vue";
import { Icon } from '@iconify/vue';

const router = useRouter();
const route = useRoute();
const isScrolling = ref(false);
const drawerOpen = ref(false);

onMounted(() => {
    isVisible.value = false;
});

const isVisible = ref(false);

const checkFocusedLink = (link) => {
    const isOnRoute = [link].includes(route.path);
    return isOnRoute;
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

function goTo(link) {
    router.push(link);
}

function toggleDrawer() {
    drawerOpen.value = !drawerOpen.value;
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
                <a href="/service" :class="'cursor-pointer' + !checkFocusedLink('/') ? 'nav-list' : 'text-primary'
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
                <a href="/about" :class="'cursor-pointer' + !checkFocusedLink('/') ? 'nav-list' : 'text-primary'
                    ">
                    Qui sommes-nous
                </a>
            </div>
            <div class="flex items-center">
                <button
                    :class="['flex flex-row items-center gap-3 min-w-[fit-content]', isScrolling ? 'px-4 py-1.5 rounded-[12px] bg-primary  hover:bg-secondary' : 'bg-transparent']"
                    @click="goTo('/contact')">
                    <Icon icon="ri:phone-line" width="24" height="24" style="color: white" />
                    <span class="min-w-[130px] text-white hidden md:block">Nous contacter</span>
                </button>

                <!-- Mobile Hamburger and Drawer Button -->
                <div class="relative xl:hidden flex items-center gap-4">
                    <div @click="toggleDrawer" class="self-end p-2 text-white cursor-pointer">
                        <Icon icon="heroicons-solid:menu-alt-3" width="24" height="24"
                            style="color: #fff" />
                    </div>
                    <!-- Mobile Drawer -->
                    <div v-if="drawerOpen" class="fixed inset-0 z-50 bg-secondary flex w-full h-screen overflow-hidden">
                        <div class="flex flex-col w-full h-screen">
                            <div @click="toggleDrawer" class="self-end p-4 text-white cursor-pointer">
                                <Icon icon="lets-icons:close-round" width="24" height="24" style="color: #fff" />
                            </div>
                            <div class="flex flex-col items-center text-white justify-center flex-grow">
                                <a href="/" class="py-2 text-xl">Accueil</a>
                                <a href="/service" class="py-2 text-xl">Nos services</a>
                                <a href="/formation" class="py-2 text-xl">Formations</a>
                                <a href="/#ressource" class="py-2 text-xl">Ressources</a>
                                <a href="/about" class="py-2 text-xl">Qui sommes-nous</a>
                            </div>
                        </div>
                    </div>
                </div>
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