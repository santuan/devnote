<script setup>
import { ToolbarButton } from "radix-vue";

import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

import { Minus } from "lucide-vue-next";
import { useI18n } from 'vue-i18n';
import Tooltip from "@/components/ui/Tooltip.vue";

const counter = useCounterStore();
const { editor } = storeToRefs(counter);
const { t } = useI18n();


</script>


<template>

  <Tooltip
    :name="t('toolbar.separator')"
    side="bottom"
  >
    <ToolbarButton
      @click="editor.chain().focus().setHorizontalRule().run()"
      class="interactive"
      :value="t('toolbar.separator')"
    >
      <Minus />
      <span class="sr-only">{{ t('toolbar.separator') }}</span>
    </ToolbarButton>
  </Tooltip>
</template>
