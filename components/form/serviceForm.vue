<template>
  <div class="mt-16">
    <Title title="Our services" tag="h2" />
    <TextNormal
      class-style="md:mt-0 mt-[20px]"
      title="Please select which service you are interested in"
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
          :icon="item.icon"
          :value="item.value"
        />
      </v-radio-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServiceForm",
  data() {
    return {
      rules: {
        isCheck: (value: string) => !!value || "Required.",
      },
      valueRadio: 0,
      formControl: [
        {
          title: "Development",
          icon: "webDevelop",
          id: "development",
          value: 1,
        },
        {
          title: "Web Design",
          icon: "webDesign",
          id: "webDesign",
          value: 2,
        },
        {
          title: "Marketing",
          icon: "marketing",
          id: "marketing",
          value: 3,
        },
        {
          title: "Other",
          icon: "setting",
          id: "otherService",
          value: 4,
        },
      ],
    };
  },
  methods: {
    handleChange(e: Event) {
      this.$emit("setService", e);
    },
  },
});
</script>
