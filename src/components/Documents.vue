<template>
<div>
    <h1>Документы</h1>
    <ul>
    <li v-for="document in documents" :key="document.id">
        {{ document.filename }}
    </li>
    </ul>
</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

const documents = [{filename: 'удостоверение'}]

/*
import { usePinia } from 'pinia';

const store = usePinia();

const documents = store.state.documents;

fetchDocuments().then((response) => {
    store.commit('setDocuments', response.data);
});
*/
</script>