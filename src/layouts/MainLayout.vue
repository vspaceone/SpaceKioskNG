<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> SpaceKioskNG DEVELOP </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    icon: "home",
    link: "",
  },
  {
    title: "Barcode Scanner",
    icon: "barcode_reader",
    link: "barcode",
  },
  {
    title: "Produkte",
    icon: "coffee",
    link: "products",
  },
  {
    title: "Guthaben aufladen",
    icon: "savings",
    link: "balance",
  },
  {
    title: "Benutzer",
    icon: "account_circle",
    link: "account",
  },
  {
    title: "Administration",
    icon: "admin_panel_settings",
    link: "administration",
  },
  {
    title: "GitHub",
    icon: "code",
    link: "https://github.com/vspaceone/SpaceKioskNG",
  },
  {
    title: "Impressum",
    icon: "info",
    link: "https://vspace.one/impressum",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
