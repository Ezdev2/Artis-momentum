<template>
    <div v-if="listing">
        <Banner @show-detail="showDetail" />
        <List />
    </div>
    <div v-else>
        <DetailFormation />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Banner from './components/Banner.vue';
import List from './components/List.vue';
import DetailFormation from './components/DetailFormation.vue';

const listing = ref(true);

function showDetail() {
    listing.value = false;
    console.log(listing.value);
}
</script>
<style scoped>

</style>