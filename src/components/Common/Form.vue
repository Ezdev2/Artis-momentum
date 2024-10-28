<template>
    <div class="w-full p-6 bg-gray-800 rounded-lg shadow-lg form-bg">
        <h3 class="text-xl text-white font-semibold mb-4">Veuillez compléter ce formulaire</h3>

        <!-- Static Form -->
        <form @submit.prevent="submitForm">
            <!-- Name field -->
            <div class="mb-4">
                <label for="name" class="text-white block">Nom complet</label>
                <input id="name" type="text" v-model="formData.name" placeholder="Votre nom" required
                    class="w-full p-2 mt-2 bg-gray-700 text-white rounded border border-gray-600" />
            </div>

            <!-- Email field -->
            <div class="mb-4">
                <label for="email" class="text-white block">Adresse e-mail</label>
                <input id="email" type="email" v-model="formData.email" placeholder="Votre e-mail" required
                    class="w-full p-2 mt-2 bg-gray-700 text-white rounded border border-gray-600" />
            </div>

            <!-- Message field -->
            <div class="mb-4">
                <label for="message" class="text-white block">Message</label>
                <textarea id="message" v-model="formData.message" rows="4" placeholder="Votre message" required
                    class="w-full p-2 mt-2 bg-gray-700 text-white rounded border border-gray-600"></textarea>
            </div>

            <!-- Submit button -->
            <div class="flex justify-end">
                <button type="submit" class="linearDark text-white py-2 px-6 rounded hover:bg-secondary transition">
                    Envoyer
                </button>
            </div>
        </form>

        <!-- Confirmation message after submission -->
        <div v-if="submitted" class="mt-4 text-center text-green-600 p-2 rounded">
            Merci pour votre message !
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

function submitForm() {
    // Here, you could submit the form data to a server or API
    console.log('Form submitted:', formData.value);

    // Simulate a successful form submission
    submitted.value = true;

    // Reset form fields
    formData.value = {
        name: '',
        email: '',
        message: ''
    };
}
</script>

<style scoped>
/* Style for the form */
input,
textarea {
    border: 1px solid #444;
    background-color: #333;
}

button {
    background-color: #4CAF50;
    /* primary color */
}

button:hover {
    background-color: #45a049;
    /* secondary hover color */
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