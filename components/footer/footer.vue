<template>
  <footer
    class="min-h-[196px] border-0 border-t border-solid border-gray-400 mt-auto"
  >
    <div
      class="
        container
        md:py-0
        py-10
        grid
        md:grid-cols-2 md:gap-x-6
        gap-y-6
        grid-cols-1
        md:h-full
      "
    >
      <div class="self-center">
        <LogoLink size="small" classStyle="text-center" />
        <TextNormal
          title="Copyright © 2021 BRIX Templates | All Rights Reserved"
        />
      </div>
      <div class="mt-5 self-center">
        <EmailForm classStyle="self-center" />
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>
