<template>
  <!-- eslint-disable vue/no-v-html -->
  <p
    class="text-secondary font-normal text"
    :class="[classStyle, getSizeProps]"
    v-html="title"
  ></p>
  <!--eslint-enable-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TypeGroup } from "~/common/type";

interface props {
  options: Omit<TypeGroup, "size" | "level">;
}

export default defineComponent({
  name: "TextSpecial",
  props: {
    title: {
      type: String,
      required: true,
    },
    classStyle: {
      type: String,
      default() {
        return "";
      },
    },
    size: {
      type: String,
      default: "medium",
      validator(value: string) {
        return ["medium", "small"].includes(value);
      },
    },
  },
  data(): props {
    return {
      options: {
        textSize: {
          medium: "xl:text-lg md:text-base text-sm leading-[30px]",
          small: "text-lg leading-5",
        },
      },
    };
  },
  computed: {
    getSizeProps(): String {
      return this.size in this.options.textSize
        ? this.options.textSize[this.size].toLowerCase()
        : "";
    },
  },
});
</script>
