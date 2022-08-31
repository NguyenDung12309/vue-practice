<template>
  <label
    :for="htmlFor"
    class="md:leading-5 leading-3 font-medium md:text-lg text-base text-gray-800 md:mb-[18px] mb-3"
    :class="classStyle"
  >
    <slot />
    <span>
      {{ title }}
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LabelText",
  props: {
    title: {
      type: String,
      required: true,
    },
    htmlFor: {
      type: String,
      default() {
        return "";
      },
    },
    classStyle: {
      type: String,
      default() {
        return "";
      },
    },
  },
});
</script>
