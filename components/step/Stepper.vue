<template>
  <div
    class="h-[99px] border-0 border-b border-solid border-gray-400 flex items-center justify-center"
  >
    <div
      v-for="n in Number(loop)"
      :key="n"
      class="flex items-center"
      :class="[n < loop ? 'w-full' : '']"
    >
      <div
        class="min-w-[34px] min-h-[34px] rounded-full flex justify-center items-center transitionAnimation"
        :class="[Number(step) >= n ? 'bg-primary' : 'bg-gray-300']"
      >
        <span class="text-white text-base leading-[18px] font-medium">{{
          n
        }}</span>
      </div>
      <div
        v-if="n < Number(loop)"
        class="h-[6px] w-full bg-gray-300 rounded-full mx-[18px] hidden sm:block"
      >
        <div
          class="h-[6px] rounded-full bg-primary w-[100%] transitionAnimation"
          :class="[getProgress(n)]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Stepper",
  props: {
    loop: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getProgress(n: Number) {
      if (this.step === n) {
        return "bg-primary w-[50%]";
      }
      if (this.step > n) {
        return "bg-primary w-[100%]";
      }
      return "bg-gray-300 w-0";
    },
  },
});
</script>
