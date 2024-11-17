<script setup>
import { ToolbarButton } from "radix-vue";

import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

import { Quote } from "lucide-vue-next";
import { useI18n } from 'vue-i18n';
import Tooltip from "@/components/ui/Tooltip.vue";

const counter = useCounterStore();
const { editor } = storeToRefs(counter);
const { t } = useI18n();


</script>


<template>
  <Tooltip
    :name="t('toolbar.quote')"
    side="bottom"
    shortcut="Ctrl Shift B"
  >
    <ToolbarButton
      @click="editor.chain().focus().toggleBlockquote().run()"
      :class="{ 'is-active': editor.isActive('blockquote') }"
      class="interactive"
      :value="t('toolbar.quote')"
    >
      <Quote />
      <span class="sr-only">{{ t('toolbar.quote') }}</span>
    </ToolbarButton>
  </Tooltip>
</template>
