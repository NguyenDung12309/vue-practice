<template>
  <div class="mt-16">
    <Title title="What’s your project budget?" tag="h2" />
    <TextNormal
      class-style="md:mt-0 mt-[20px]"
      title="Please select the project budget range you have in mind."
    />
    <div class="mt-[39px]">
      <v-radio-group
        v-model="valueRadio"
        @change="handleChange"
        class="inputRadioImage"
        :rules="[rules.isCheck]"
      >
        <InputRadio
          v-for="item in formControl"
          :key="item.id"
          :title="item.title"
          :value="item.value"
        />
      </v-radio-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BudgeForm",
  data() {
    return {
      rules: {
        isCheck: (value: string) => !!value || "Required.",
      },
      valueRadio: 0,
      formControl: [
        {
          title: "$5.000 - $10.000",
          id: "pack1",
          value: 1,
        },
        {
          title: "$10.000 - $20.000",
          id: "pack2",
          value: 2,
        },
        {
          title: "$20.000 - $50.000",
          id: "pack3",
          value: 3,
        },
        {
          title: "$50.000 +",
          id: "pack4",
          value: 4,
        },
      ],
    };
  },
  methods: {
    handleChange(e: Event) {
      this.$emit("setBudge", e);
    },
  },
});
</script>
