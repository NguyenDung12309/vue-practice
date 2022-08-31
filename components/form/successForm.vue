<template>
  <div class="mt-10">
    <img src="~/assets/images/success.png" alt="" class="block mx-auto" />
    <Title
      title=" Submit your quote request"
      tag="h2"
      class-style="text-center mt-2 mb-[7px]"
    />
    <TextNormal
      title="Please review all the information you previously typed in the past steps,
    and if all is okay, submit your message to receive a project quote in 24 -
    48 hours."
      class-style="text-center"
    />
    <ButtonSubmit title="Submit" classStyle="block mx-auto mt-3" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SuccessForm",
});
</script>
