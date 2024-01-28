<template>
<div>
    <h3>Документы</h3>
    <ul>
    <li v-for="document in documents" :key="document.id">
        {{ document.filename }}
    </li>
    </ul>
</div>
</template>

<script setup lang="ts">
//заглушка для axios так как api не авторизует
import axios from '../components/axiosmock';

const documents = [{id: 1, filename: 'удостоверение'}]

axios.post('https://products.halyklife.kz/api/v1/test/insis/arm/api/File/List', {
    //processInstanceId: '0370c1fd-3b3d-4974-a0cb-23e8ccc727cd'
}).then(response => {
    console.log(response)
})

/*
import { usePinia } from 'pinia';

const store = usePinia();

const documents = store.state.documents;

fetchDocuments().then((response) => {
    store.commit('setDocuments', response.data);
});
*/
</script>

<style scoped>
body {
  place-items: top;
}
#app {
  margin: 0 0;
}
</style>