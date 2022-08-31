<template>
  <div class="mt-16">
    <Title title="Contact details" tag="h2" class-style="mt-0" />
    <TextNormal
      class-style="md:mt-0 mt-[20px]"
      title="Lorem ipsum dolor sit amet consectetur adipisc."
    />
    <div
      class="mt-[39px] grid sm:grid-cols-2 grid-cols-1 gap-y-6 gap-x-0 sm:gap-x-7 sm:gap-y-11"
    >
      <div class="flex flex-col" v-for="item in formControl" :key="item.id">
        <LabelText :title="item.title" />
        <InputText
          v-if="item.id === 'email'"
          :place-holder="item.placeholder"
          :icon="item.icon"
          :id="item.id"
          @handleChange="getData"
          :rules="[rules.required, rules.email]"
        ></InputText>
        <InputText
          v-else-if="item.id === 'phoneNumber'"
          :place-holder="item.placeholder"
          :icon="item.icon"
          :id="item.id"
          @handleChange="getData"
          :rules="[rules.required, rules.phoneNumber]"
        ></InputText>
        <InputText
          v-else
          :place-holder="item.placeholder"
          :icon="item.icon"
          :id="item.id"
          @handleChange="getData"
          :rules="[rules.required]"
        ></InputText>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactForm",

  data() {
    return {
      rules: {
        required: (value: string) => !!value || "Required.",
        phoneNumber: (value: string) => {
          const pattern =
            /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
          return pattern.test(value) || "Invalid phone Number.";
        },
        email: (value: string) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
      formControl: [
        {
          id: "name",
          title: "Name",
          placeholder: "Name",
          icon: "user",
        },
        {
          id: "email",
          title: "Email",
          placeholder: "Email Address",
          icon: "email",
        },
        {
          id: "phoneNumber",
          title: "Phone Number",
          placeholder: "Phone Number",
          icon: "phone",
        },
        {
          id: "company",
          title: "Company",
          placeholder: "Company Name",
          icon: "company",
        },
      ],
    };
  },
  methods: {
    getData(data: Object) {
      this.$emit("setContact", data);
    },
  },
});
</script>
