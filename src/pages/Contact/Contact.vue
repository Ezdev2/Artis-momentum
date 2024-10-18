<template>
    <div class="p-[24px] lg:px-[122px] pt-[80px] md:grid grid-cols-2 gap-8">
        <div class="flex flex-col items-center gap-8 w-full mb-4">
            <h2 class="linearBg text-left font-bold w-full">Contactez-nous</h2>
            <p class="text-white text-left ">Nous sommes là pour répondre à toutes vos questions. Remplissez
                le formulaire ci-dessous pour nous contacter, et nous reviendrons vers vous dans les plus brefs délais.
            </p>

        </div>
        <!-- Formulaire de Contact -->
        <Form />
    </div>
</template>

<script setup>
import Form from '../../components/Common/Form.vue';
</script>

<style scoped></style>