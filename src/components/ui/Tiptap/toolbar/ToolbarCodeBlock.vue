<script setup>
import { ToolbarButton } from "radix-vue";

import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

import { useI18n } from 'vue-i18n';
import Tooltip from "@/components/ui/Tooltip.vue";
import { Code } from "lucide-vue-next";

const counter = useCounterStore();
const { editor } = storeToRefs(counter);
const { t } = useI18n();

</script>


<template>
  <Tooltip
    :name="t('toolbar.codeBlock')"
    side="bottom"
    shortcut="Ctrl Alt C"
  >
    <ToolbarButton
      @click="editor.chain().focus().toggleCodeBlock().run()"
      :class="{ 'is-active': editor.isActive('codeBlock') }"
      class="interactive"
      :value="t('toolbar.codeBlock')"
    >
      <Code />
      <span class="sr-only">{{ t('toolbar.codeBlock') }}</span>
    </ToolbarButton>
  </Tooltip>
</template>
