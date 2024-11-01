<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { Plus } from "lucide-vue-next";
import {  breakpointsTailwind, useBreakpoints, } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanLg = breakpoints.greater("lg");
const counter = useCounterStore();
const { loaded_id } = storeToRefs(counter);

function new_document() {
  counter.clear_editor();
  counter.content_editable = true;
  if (!largerThanLg.value) {
    counter.showProjects = false;
  }
}

</script>

<template>
  <button
    @click="loaded_id === '' ? null : new_document()"
    class="CreateNewButton flex items-center justify-center gap-2 text-xs size-8 w-full text-left bg-primary focus-within:ring-1 ring-primary text-primary-foreground"
    :class="{
      '!bg-secondary !ring-secondary !text-primary-foreground': loaded_id === null,
      '!bg-secondary/30 !text-primary ': loaded_id === '',
    }"
  >
    <Plus
      class="size-4"
    />
    <span class="sr-only">{{ t('sidebar.newDocument') }}</span>
  </button>
</template>