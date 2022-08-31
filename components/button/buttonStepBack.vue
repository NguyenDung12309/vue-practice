<template>
  <v-btn
    class="shadow-sm border border-solid bg-white border-primary rounded-full h-auto group"
    :class="[classStyle, getSizeProps]"
    @click="action()"
  >
    <span class="text-primary normal-case" :class="getTextSizeProps"
      >Previous step</span
    >
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TypeGroup } from "~/common/type";

interface props {
  options: Omit<TypeGroup, "level">;
}

export default defineComponent({
  name: "ButtonStepBack",
  props: {
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
          medium: "py-5 md:px-10 px-5 border-0 border-b p-[14px]",
          small: " py-[14px] px-[26px] border-0 border-b-[3px]",
        },
        textSize: {
          medium: "lg:leading-5 lg:text-lg font-bold leading-3 text-md",
          small: " leading-[18px] text-base",
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
  methods: {
    action() {
      this.$emit("action");
    },
  },
});
</script>
