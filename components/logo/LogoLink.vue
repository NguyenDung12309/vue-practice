<template>
  <NuxtLink :to="path" class="outline-none border-none" :class="[classStyle]">
    <img
      src="~/assets/images/Logo.png"
      alt="Logo"
      :class="[imageStyle, getSizeProps]"
    />
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TypeGroup } from "~/common/type";

interface props {
  options: Omit<TypeGroup, "textSize" | "level">;
}
export default defineComponent({
  name: "LogoLink",
  props: {
    path: {
      type: String,
      default() {
        return "/";
      },
    },
    size: {
      type: String,
      default: "medium",
      validator(value: string) {
        return ["medium", "small"].includes(value);
      },
    },
    classStyle: {
      type: String,
      default() {
        return "";
      },
    },
    imageStyle: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data(): props {
    return {
      options: {
        size: {
          medium: "md:w-[304px] md:h-[40px] h-auto w-full ",
          small: "md:h-[35px] h-[26px]",
        },
      },
    };
  },
  computed: {
    getSizeProps(): String {
      return this.size in this.options.size
        ? this.options.size[this.size].toLowerCase()
        : "";
    },
  },
});
</script>
