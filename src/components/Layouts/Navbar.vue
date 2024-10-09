<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, onUnmounted, ref } from "vue";

const router = useRouter();
const route = useRoute();
const isScrolling = ref(false);

onMounted(() => {
    isVisible.value = false;
});

const handleClick = (route) => {
    router.push(route);
};

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
</script>

<template>
    <div class="navbar w-full">
        <div
            :class="['flex flex-row items-center justify-between', isScrolling ? 'nav-scrolling bg-white my-[16px] mx-[24px] px-8 py-1.5 rounded-[18px]' : 'bg-secondary lg:px-[122px] px-[24px] py-4 w-full']">
            <div>
                <a href="/" class="font-[800] text-[#3a3a3a]">
                    ARTIS MOMENTUM
                </a>
            </div>
            <div class="xl:flex flex-row items-center gap-[34px] justify-center hidden text-[#3a3a3a]">
                <div :class="'cursor-pointer' + !checkFocusedLink('/') ? 'nav-list' : 'text-primary'
                    " @click="handleClick('/')">
                    Accueil
                </div>
                <div :class="'cursor-pointer' + !checkFocusedLink('/') ? 'nav-list' : 'text-primary'
                    " @click="handleClick('/')">
                    Nos services
                </div>
                <div :class="'cursor-pointer' + !checkFocusedLink('/')
                    ? 'nav-list'
                    : 'text-primary'
                    " @click="handleClick('/')">
                    Formations
                </div>
                <div :class="'cursor-pointer' + !checkFocusedLink('/')
                    ? 'nav-list'
                    : 'text-primary'
                    " @click="handleClick('/')">
                    Ressources
                </div>
                <div :class="'cursor-pointer' + !checkFocusedLink('/') ? 'nav-list' : 'text-primary'
                    " @click="handleClick('/')">
                    Qui sommes-nous
                </div>
            </div>
            <div class="flex flex-row items-center justify-end">
                <button :class="['flex flex-row items-center gap-3 bg-transparent min-w-[fit-content]', isScrolling ? 'px-4 py-1.5 rounded-[12px]' : '' ]" @click="logIn">
                    <img src="@/assets/user.svg" alt="" />
                    <span class="hidden md:block min-w-[96px]">Se connecter</span>
                </button>
                <button
                    :class="['hidden xl:flex items-center justify-center bg-black text-white hover:text-black hover:bg-transparent focus:bg-transparent focus:outline-none', isScrolling ? 'px-4 py-1.5 rounded-[12px]' : 'px-6 py-3.5']"
                    @click="signUp">
                    <span class="min-w-[130px]">Créer un compte</span>
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
    border: 0.5px solid rgb(219, 217, 217);
}
.nav-list {
    cursor: pointer;

    &:hover {
        color: rgb(219, 217, 217);
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