<template>
  <v-btn
    class="shadow-sm border-solid bg-primary hover:bg-primary-bold border-primary rounded-full h-auto"
    :class="[classStyle, getSizeProps]"
  >
    <NuxtLink :to="path">
      <span
        class="text-white normal-case inline-block"
        :class="getTextSizeProps"
        >{{ title }}</span
      >
    </NuxtLink>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TypeGroup } from "~/common/type";

interface props {
  options: Omit<TypeGroup, "level">;
}

export default defineComponent({
  name: "ButtonLink",
  props: {
    path: {
      type: String,
      default() {
        return "/";
      },
    },
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
        size: {
          medium: "lg:py-5 lg:px-10 border-0 border-b p-[14px]",
          small: " py-[14px] px-[26px] border-0 border-b-[3px]",
        },
        textSize: {
          medium: "lg:leading-5 lg:text-lg font-bold leading-3 text-md",
          small: " leading-[18px] text-base font-medium",
        },
      },
    };
  },

  computed: {
    getSizeProps(): String {
      return this.size in this.options.size ? this.options.size[this.size] : "";
    },
    getTextSizeProps(): String {
      return this.size in this.options.textSize
        ? this.options.textSize[this.size]
        : "";
    },
  },
});
</script>
