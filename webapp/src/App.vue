<template>
  <div>
    <component :is="layout">
    </component>
  </div>
</template>



<script lang="ts">
import DefaultLayout from "./layout/DefaultLayout.vue";

export default {
  components: {
    DefaultLayout
  },
  computed: {
    layout() {
      return `DefaultLayout`;
    },
  },
};
</script>
