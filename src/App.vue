<template>
    <router-view />
    <ErrorNotification />
</template>
  
<script lang="ts">
import ErrorNotification from './components/ErrorNotification.vue';
export default {
    components: {
        ErrorNotification,
    },
}
</script>