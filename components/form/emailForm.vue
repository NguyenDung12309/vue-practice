<template>
  <v-form @submit="handleSubmit" class="emailForm lg:w-[507px] w-full">
    <InputText placeHolder="Enter your email">
      <ButtonSubmit title="Subscribe" size="small" class="hidden sm:block" />
    </InputText>
    <ButtonSubmit
      title="Subscribe"
      size="small"
      class="block sm:hidden float-right"
    />
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmailForm",
  data() {
    return {
      emailAddress: "",
      error: "",
    };
  },
  methods: {
    handleSubmit(e: Event) {
      e.preventDefault();
      if (
        this.validateEmpty(this.emailAddress) &&
        this.validateEmail(this.emailAddress)
      ) {
        console.log(this.emailAddress);
      }
    },
    validateEmail(email: string) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        this.error = "";
        return true;
      }
      this.error = "You have entered an invalid email address!";
      return false;
    },
    validateEmpty(data: string) {
      if (!data) {
        this.error = "this field is required";
        return false;
      }
      this.error = "";
      return true;
    },
    getData(data: string) {
      this.emailAddress = data;
      return (
        this.validateEmpty(this.emailAddress) &&
        this.validateEmail(this.emailAddress)
      );
    },
  },
});
</script>
