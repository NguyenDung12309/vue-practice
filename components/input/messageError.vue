<template>
  <p class="text-danger text-xs h-5 ml-6 mt-3" :class="classStyle">
    {{ errorMessage }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MessageError",
  props: {
    classStyle: {
      type: String,
      default() {
        return "";
      },
    },
    errorMessage: {
      type: String,
      default() {
        return "";
      },
    },
  },
});
</script>
