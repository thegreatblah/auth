<template>
    <router-view />
    <ErrorNotification />
</template>
  
<script>
import ErrorNotification from './components/Errornotification.vue';
export default {
    components: {
        ErrorNotification,
    },
}
</script>