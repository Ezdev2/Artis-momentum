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
            <p class="text-left">© Copyright {{ currentYear }}</p>
            <p class="footer__title">ARTIS MOMENTUM</p>
        </div>
        <div class="flex flex-col items-start gap-[24px]">
            <p class="footer__title">Menu</p>
            <a href="/">Accueil</a>
            <a href="/#formation">Formation</a>
            <a href="/#service">Services</a>
        </div>
        <div class="flex flex-col items-start gap-[24px]">
            <p class="footer__title">Payement</p>
            <a href="#">Stripe</a>
            <a href="#">Physique</a>
            <a href="#">Mode de payement</a>
        </div>
        <div class="flex flex-col items-start gap-[24px]">
            <p class="footer__title">Nous contacter</p>
            <a href="#">Téléphone: 020 000 000</a>
            <a href="#">Email:  test@gmail.com</a>
            <a href="#">Adresse: Rue 201, Ankatso</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    @apply bg-transparent w-full text-white;
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