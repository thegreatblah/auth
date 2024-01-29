<template>
<div class="error" v-if="error">
{{ error }}
</div>
</template>


<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { useErrorStore } from './storeError';

const userStore = useErrorStore()
const { error } = storeToRefs(userStore)
</script>

<style>
div.error {
    background-color: #FB4545;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    padding: 10px;
    padding-left: 25px;
    color: white;
}
</style>
