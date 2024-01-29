<template>
    <router-view />
    <ErrorNotification />
</template>
  
<script>
import ErrorNotification from './components/ErrorNotification.vue';
export default {
    components: {
        ErrorNotification,
    },
}
</script>