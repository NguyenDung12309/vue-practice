<template>
  <v-radio :value="value">
    <template v-slot:label>
      <LabelText
        :title="title"
        class-style="cursor-pointer flex items-center mb-0 h-[114px] pl-[25px] w-full shadow-ssx border-solid border-gray-300 rounded-2xl border hover:border-gray-800 peer-checked:border-primary transition-all"
      >
        <div
          v-if="icon"
          class="
            w-[66px]
            h-[66px]
            bg-primary-light
            rounded-full
            mr-3
            flex
            items-center
            justify-center
          "
        >
          <img :src="getImgUrl(icon)" alt="" class="h-8 w-[37px]" />
        </div>
        <div v-else class="relative w-9 h-full">
          <img src="~/assets/icons/checked.svg" alt="checked" class="checked" />
          <img src="~/assets/icons/unCheck.svg" alt="uncheck" class="uncheck" />
          <img
            src="~/assets/icons/checkError.svg"
            alt="checkerror"
            class="checkerror"
          />
        </div>
      </LabelText>
    </template>
  </v-radio>
</template>
  
  <script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputRadio",
  props: {
    value: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      default() {
        return "";
      },
    },
    title: {
      type: String,
      default() {
        return "";
      },
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("~/assets/icons/" + pic + ".svg");
    },
  },
  data() {
    return {
      radioGroup: 0,
    };
  },
});
</script>