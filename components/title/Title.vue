<template>
  <component
    :is="tag"
    class="font-bold"
    :class="[classStyle, getHeadingLevel]"
    >{{ title }}</component
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HeadingType } from "~/common/type";

interface Props {
  level: HeadingType;
}

export default defineComponent({
  name: "Title",
  props: {
    tag: {
      type: String,
      required: true,
    },
    classStyle: {
      type: String,
      default() {
        return "";
      },
    },
    title: {
      type: String,
      required: true,
    },
  },
  data(): Props {
    return {
      level: {
        h1: "  md:leading-[46px] md:text-[34px] leading-[30px] text-[28px]  ",
        h2: " md:text-2xl text-[20px] md:leading-[35px] leading-[28px]",
      },
    };
  },
  computed: {
    getHeadingLevel(): String {
      return this.tag in this.level ? this.level[this.tag] : "";
    },
  },
});
</script>
