<script setup>
import { ToolbarButton } from "radix-vue";

import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

import { List, ListOrdered } from "lucide-vue-next";
import { useI18n } from 'vue-i18n';
import Tooltip from "@/components/ui/Tooltip.vue";

const counter = useCounterStore();
const { editor } = storeToRefs(counter);
const { t } = useI18n();


</script>


<template>
  <Tooltip
    :name="t('toolbar.bulletList')"
    side="bottom"
    shortcut="Ctrl Shift 8"
  >
    <ToolbarButton
      @click="editor.chain().focus().toggleBulletList().run()"
      :class="{ 'is-active': editor.isActive('bulletList') }"
      class="interactive"
      :value="t('toolbar.bulletList')"
    >
      <List />
      <span class="sr-only">{{ t('toolbar.bulletList') }}</span>
    </ToolbarButton>
  </Tooltip>
  <Tooltip
    :name="t('toolbar.orderedList')"
    side="bottom"
    shortcut="Ctrl Shift 7"
  >
    <ToolbarButton
      @click="editor.chain().focus().toggleOrderedList().run()"
      :class="{ 'is-active': editor.isActive('orderedList') }"
      class="interactive"
      :value="t('toolbar.orderedList')"
    >
      <ListOrdered />
      <span class="sr-only">{{ t('toolbar.orderedList') }}</span>
    </ToolbarButton>
  </Tooltip>
</template>
