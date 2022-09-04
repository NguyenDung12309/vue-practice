<template>
  <header class="container">
    <nav class="h-[126px] flex items-center justify-between">
      <LogoLink />
      <ButtonSubmit title="Clone now" classStyle="ml-6 sm:ml-0" />
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>
