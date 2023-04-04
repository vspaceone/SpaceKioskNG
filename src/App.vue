<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "App",
  setup() {
    const $q = useQuasar();

    //set dark mode if browser prefers dark color scheme
    $q.dark.set(window.matchMedia("(prefers-color-scheme: dark)").matches);
  },
});
</script>
