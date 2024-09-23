<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();
const route = useRoute();

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
</script>

<template>
    <div class="bg-secondary">
        <div class="flex flex-row items-center justify-between lg:px-[122px] px-[24px] py-4">
            <div>
                <a href="/" class="font-[800] text-[#3a3a3a]">
                    ARTIS MOMENTUM
                </a>
            </div>
            <div class="xl:flex flex-row items-center gap-[84px] hidden text-[#3a3a3a]">
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
            <div class="flex flex-row items-center gap-6">
                <button class="flex flex-row items-center gap-3 bg-transparent" @click="logIn">
                    <img src="@/assets/user.svg" alt="" />
                    <span class="hidden md:block">Se connecter</span>
                </button>
                <button
                    class="hidden md:flex items-center justify-center px-6 py-3.5 bg-white text-primary hover:bg-black focus:bg-black focus:outline-none"
                    @click="signUp">
                    Créer un compte
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.nav-list {
    cursor: pointer;

    &:hover {
        color: white;
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