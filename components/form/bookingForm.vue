<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="mx-auto max-w-[689px] w-full"
    @submit="handleSubmit"
  >
    <div
      class="w-full md:h-[606px] md:px-[51px] md:pb-[80px] mb-[31px] px-[30px] pb-[50px] shadow-lg border border-solid border-gray-300 rounded-[34px]"
    >
      <Stepper :loop="4" :step="currentTab" />
      <transition name="component-fade" mode="out-in">
        <keep-alive>
          <component
            :is="components[currentTab - 1]"
            @setContact="setContact"
            @setService="setService"
            @setBudge="setBudge"
          />
        </keep-alive>
      </transition>
    </div>
    <div class="flex justify-between">
      <div>
        <ButtonStepBack
          @action="handleBack"
          v-if="currentTab > 1 && currentTab <= components.length"
        />
      </div>
      <div>
        <ButtonStepNext
          @action="handleNext"
          v-if="currentTab < components.length"
          class-style="float-right"
        />
      </div>
    </div>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactForm from "./contactForm.vue";
import ServiceForm from "./serviceForm.vue";
import BudgeForm from "./budgeForm.vue";
import SuccessForm from "./successForm.vue";

export default defineComponent({
  name: "BookingForm",
  data() {
    return {
      valid: true,
      message: "",
      formData: {
        contactData: {
          name: "",
          email: "",
          phoneNumber: "",
          company: "",
        },
        serviceData: 0,
        budgeData: 0,
      },
      currentTab: 1,
      components: [ContactForm, ServiceForm, BudgeForm, SuccessForm],
    };
  },
  methods: {
    handleSubmit(e: Event) {
      e.preventDefault();
      console.log(this.formData);
    },
    validate() {
      const checkValid = (
        this.$refs.form as unknown as Vue & { validate: () => boolean }
      ).validate();
      return checkValid;
    },
    handleBack() {
      this.message = "";
      if (this.currentTab > 1) {
        this.currentTab--;
      }
    },
    handleNext() {
      if (!this.currentTab) return;
      switch (this.currentTab) {
        case 1:
          if (this.checkEmptyOBJ(this.formData.contactData)) {
            this.validate();
            break;
          }
          this.currentTab++;
          break;
        case 2:
          if (!this.formData.serviceData) {
            this.validate();
            break;
          }
          this.currentTab++;
          break;
        case 3:
          if (!this.formData.budgeData) {
            this.validate();
            break;
          }
          this.currentTab++;
          break;
        case 4:
          this.currentTab++;
          break;
        default:
          break;
      }
    },
    checkEmptyOBJ(obj: object): boolean {
      const isEmpty = !Object.values(obj).every((x) => !!x);
      return isEmpty;
    },
    setContact(data: Object) {
      this.formData.contactData = { ...this.formData.contactData, ...data };
    },
    setService(data: Number) {
      if (typeof data === "number") {
        this.formData.serviceData = data;
      }
    },
    setBudge(data: Number) {
      if (typeof data === "number") {
        this.formData.budgeData = data;
      }
    },
  },
});
</script>
