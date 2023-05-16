<template>
  <q-page padding>
    <AdminComponent />
  </q-page>
</template>

<script>
import AdminComponent from "../components/AdminComponent.vue";

export default {
  name: "AdminPage",
  components: {
    AdminComponent,
  },
};
</script>
