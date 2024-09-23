<script setup>
import { ref, onMounted } from "vue";

const currentYear = ref(new Date().getFullYear());

onMounted(() => {
    setInterval(() => {
        currentYear.value = new Date().getFullYear();
    }, 1000);
});

</script>

<template>
    <div class="footer">
        <div class="flex flex-col gap-[24px]">
            <p>© Copyright {{ currentYear }}</p>
        </div>
        <div class="flex flex-col items-start gap-[24px]">
            <p class="footer__title">Menu</p>
            <a href="#">Accueil</a>
            <a href="#">Tableau</a>
            <a href="#">Se connecter</a>
        </div>
        <div class="flex flex-col items-start gap-[24px]">
            <p class="footer__title">Payement</p>
        </div>
        <div class="flex flex-col items-start gap-[24px]">
            <p class="footer__title">Nous contacter</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    @apply bg-transparent w-full;
    display: flex;
    flex-wrap: wrap;
    padding: 80px 194px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    gap: 20px;

    &__title {
        text-transform: uppercase;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}

@media only screen and (max-width: 550px) {
    .footer {
        padding: 80px;
        gap: 35px;
    }
}
</style>