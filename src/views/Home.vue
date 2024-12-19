<script setup>
import Sidebar from "@/components/TheSidebar.vue";
import Document from "@/components/Document.vue";


import { onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";
import { useSettingsStore } from "@/stores/settings";
import PullToRefresh from "@/components/ui/PullToRefresh.vue";

const counter = useCounterStore();
const settings = useSettingsStore();
const { project_name, project_body } = storeToRefs(counter);

onMounted(() => {
  counter.init_database();
  counter.auto_save();
  if (settings.save_on_load) {
    counter.showShareModal = true;
  }
});

watch(project_name, (v) => {
  if (v) counter.auto_save();
});

watch(project_body, (v) => {
  if (v) counter.auto_save();
});

</script>

<template>
  <PullToRefresh>
    <div class="flex w-full print:!h-auto print:!overflow-y-auto h-svh overflow-y-hidden">
      <Sidebar />
      <Document />
    </div>
  </PullToRefresh>
</template>
