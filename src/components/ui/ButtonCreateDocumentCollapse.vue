<script setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

import { breakpointsTailwind, useBreakpoints, } from "@vueuse/core";
import { Plus } from "lucide-vue-next";
import { useI18n } from 'vue-i18n';

const counter = useCounterStore();
const { loaded_id } = storeToRefs(counter);

const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanLg = breakpoints.greater("lg");
const { t } = useI18n();

function new_document() {
  if (largerThanLg.value === true) {
    counter.clear_editor();
    counter.content_editable = true;
  } else {
    counter.clear_editor();
    counter.showProjects = false;
    counter.content_editable = true;
  }
  focusOnTitle()
}

function focusOnTitle() {
  setTimeout(() => {
    counter.SetFocusTitle()
  }, 100);
}

</script>

<template>
  <button
    @click="new_document()"
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