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
  <div class="px-0.5 mx-1 my-1.5">
    <button
      @click="loaded_id === '' ? null : new_document()"
      class="CreateNewButton flex items-center my-0.5 justify-center gap-2 text-xs min-h-7 w-full text-left bg-primary focus-within:ring-1 ring-primary"
      :class="{
        '!bg-secondary !ring-secondary !text-primary-foreground': loaded_id === null,
        '!bg-secondary/30 !text-muted-foreground/50 ': loaded_id === '',
      }"
    >
      <Plus
        v-show="loaded_id !== ''"
        class="size-4 text-primary-foreground"
      />
      <span
        v-show="loaded_id === ''"
        class="flex items-center gap-1 text-primary animate-pulse"
      >
        * {{ t('sidebar.newDocument') }}
        <span
          v-show="counter.project_name"
          class="inline-block font-bold truncate opacity-80 max-w-24"
        >
          {{ counter.project_name }}
        </span>

      </span>
      <span
        class="font-bold text-primary-foreground"
        v-show="loaded_id !== ''"
      >
        {{ t('sidebar.newDocument') }}
      </span>
    </button>
  </div>
</template>