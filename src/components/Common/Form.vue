<template>
    <div class="w-full p-6 bg-gray-800 rounded-lg shadow-lg form-bg">
        <h3 class="text-xl text-white font-semibold mb-4">Veuillez compléter ce formulaire</h3>

        <form @submit.prevent="submitForm">
            <!-- Champ de nom -->
            <div class="mb-4">
                <label for="name" class="text-white block">Nom complet</label>
                <input id="name" type="text" v-model="formData.name" placeholder="Votre nom" required
                    class="w-full p-2 mt-2 bg-gray-700 text-white rounded border border-gray-600" />
            </div>

            <!-- Champ d'email -->
            <div class="mb-4">
                <label for="email" class="text-white block">Adresse e-mail</label>
                <input id="email" type="email" v-model="formData.email" placeholder="Votre e-mail" required
                    class="w-full p-2 mt-2 bg-gray-700 text-white rounded border border-gray-600" />
            </div>

            <!-- Champ de message -->
            <div class="mb-4">
                <label for="message" class="text-white block">Message</label>
                <textarea id="message" v-model="formData.message" rows="4" placeholder="Votre message" required
                    class="w-full p-2 mt-2 bg-gray-700 text-white rounded border border-gray-600"></textarea>
            </div>

            <!-- Bouton d'envoi -->
            <div class="flex justify-end">
                <button type="submit" class="linearDark text-white py-2 px-6 rounded hover:bg-secondary transition">
                    Envoyer
                </button>
            </div>
        </form>

        <!-- Message de confirmation après soumission -->
        <div v-if="submitted" class="mt-4 text-center text-green-600 p-2 rounded">
            Merci pour votre message !
        </div>
        <div v-if="error" class="mt-4 text-center text-red-600 p-2 rounded">
            Une erreur s'est produite lors de l'envoi.
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
    name: '',
    email: '',
    message: ''
});

const submitted = ref(false);
const error = ref(false);

async function submitForm() {
    submitted.value = false;
    error.value = false;

    // Objet FormData pour l'envoi
    const formPayload = new FormData();
    formPayload.append('name', formData.value.name);
    formPayload.append('email', formData.value.email);
    formPayload.append('message', formData.value.message);

    try {
        const response = await fetch('https://formspree.io/f/xqakppvg', {
            method: 'POST',
            body: formPayload,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            submitted.value = true;
            // Réinitialiser les champs du formulaire
            formData.value = {
                name: '',
                email: '',
                message: ''
            };
        } else {
            error.value = true;
        }
    } catch (e) {
        error.value = true;
    }
}
</script>

<style scoped>

input,
textarea {
    border: 1px solid #444;
    background-color: #333;
}

button {
    background-color: #4CAF50;
}

button:hover {
    background-color: #45a049;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #4CAF50;
}

textarea {
    resize: none;
}

.form-bg {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
}
</style>
