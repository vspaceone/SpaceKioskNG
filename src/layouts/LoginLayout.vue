<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
      <LoginComponent />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import LoginComponent from 'components/LoginComponent.vue'

export default defineComponent({
  name: 'LoginLayout',

  components: {
    LoginComponent
  },

})
</script>
