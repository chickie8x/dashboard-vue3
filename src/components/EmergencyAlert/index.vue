<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center w-full border-b bg-slate-700 px-4 text-white">
      <icon-alert class="w-[28px] h-[24px] mr-2"></icon-alert>
      <span class="py-3 font-semibold">EMERGENCY ALERTS</span>
    </div>
    <div>Notifications and Alerts</div>
  </div>
</template>

<script>
import IconAlert from "../icons/IconAlert.vue";
export default {
  name: "EmergencyAlert",
  components: {
    IconAlert,
  },
  setup() {
    return {};
  },
};
</script>
