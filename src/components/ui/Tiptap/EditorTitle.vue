<script setup>
import { useCounterStore } from "@/stores/counter";
import { useI18n } from 'vue-i18n';
import { storeToRefs } from "pinia";
import { Type } from "lucide-vue-next";
import Tooltip from "../../ui/Tooltip.vue";

const counter = useCounterStore();
const { focusTitleTextarea, showEditorToolbar } = storeToRefs(counter);
const { t } = useI18n();

</script>

<template>
  <div class="flex items-start justify-between w-full gap-1 group relative md:!select-none">
    <span class="sr-only">{{ t('editor.untitled') }}</span>
    <textarea
      :placeholder="t('editor.untitled')"
      autocomplete="off"
      spellcheck="false"
      ref="focusTitleTextarea"
      v-model="counter.project_name"
      style="field-sizing: content"
      class="w-full pr-8 px-2 py-0.5 overflow-hidden ring-1 outline-none resize-none leading-8 max-h-9 md:max-h-auto min-h-8 create_project bg-secondary/30 text-foreground ring-secondary focus-within:ring-primary placeholder:text-primary/80 hover:ring-primary ring-inset focus:max-h-full line-clamp-1 focus:overflow-visible  focus:line-clamp-none"
    />
    <Tooltip
      name="HTML options"
      :side="'bottom'"
      :align="'end'"
      shortcut="ctrl shift alt &uarr; "
    >
      <button
        class="absolute  font-serif top-0.5 md:top-0 right-0.5 md:right-0 size-8 md:size-9 flex justify-center items-center z-10 shrink-0 ring-1 ring-secondary ring-inset group-focus-within:ring-1 group-hover:ring-1 group-hover:ring-primary group-focus-within:ring-primary"
        :class="[
          counter.loaded_id ? '' : 'hidden md:flex',
          counter.showEditorToolbar ? ' bg-primary text-primary-foreground ' : 'bg-secondary text-foreground',
        ]"
        @click="showEditorToolbar = !showEditorToolbar"
      >
        <span>H</span>
      </button>
    </Tooltip>
  </div>
</template>
