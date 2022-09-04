<template>
  <v-text-field
    spellcheck="false"
    :placeholder="placeHolder"
    rounded
    background-color="#ffffff"
    filled
    required
    color="purple darken-2"
    class="textInput"
    v-model="value"
    @input="changeText"
    :rules="rules"
  >
    <template v-slot:append v-if="icon">
      <img :src="getImgUrl(icon)" class="transitionFocus" :alt="icon" />
    </template>
    <template v-slot:append v-else>
      <slot />
    </template>
  </v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputText",
  props: {
    rules: {
      type: Array,
      default() {
        return [];
      },
    },
    id: {
      type: String,
      default() {
        return "";
      },
    },
    placeHolder: {
      type: String,
      default() {
        return "";
      },
    },
    icon: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    getImgUrl(pic: string) {
      return require("~/assets/icons/" + pic + ".svg");
    },
    changeText(e: Event) {
      this.$emit("handleChange", { [this.id]: this.value });
    },
  },
});
</script>
