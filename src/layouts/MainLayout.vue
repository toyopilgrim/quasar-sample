<template>
  <q-layout view="lHh lpr lFf" container style="height: 400px" >
    <q-header>
      <q-toolbar class="glossy" style="height: 80px">
        <q-avatar>
          <img alt="logo" src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        <q-toolbar-title>AML demo</q-toolbar-title>
        <q-btn flat round dense icon="whatshot" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>