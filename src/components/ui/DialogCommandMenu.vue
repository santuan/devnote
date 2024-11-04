<script setup lang="ts">

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import { ref, nextTick, } from 'vue'
import {
  ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxLabel, ComboboxRoot, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger, VisuallyHidden
} from 'radix-vue'
import { useMagicKeys, whenever, breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import Tooltip from "./Tooltip.vue";

import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { Search, X } from 'lucide-vue-next';
const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanLg = breakpoints.greater("lg");

import { useIsMobile } from '@/composables/useIsMobile';
const { isMobile } = useIsMobile();

const counter = useCounterStore();
const { allItemsTodo, editor } = storeToRefs(counter);
const open = ref(false)

const keys = useMagicKeys();
const magicCommandMenu = keys["ctrl+alt+o"];

whenever(magicCommandMenu, (n) => {
  if (n)
    open.value = true
})

function handleSelect(id) {
  open.value = false
  counter.set_project(id);
}

function close() {
  open.value = false
}

function new_document() {
  counter.clear_editor();
  counter.content_editable = true;
  open.value = false
}

const focusEditor = () => {
  counter.content_editable = true;
  close()
  if (largerThanLg.value === false) {
    counter.showProjects = false
  }
  nextTick(() => {
    editor.value.commands.focus()
  });

};

</script>

<template>
  <DialogRoot v-model:open="open">
    <Tooltip
      :name="t('commandBar.title')"
      :side="counter.showProjects ? 'bottom' : 'right'"
      shortcut="ctrl + alt + o"
      :align="counter.showProjects ? 'end' : 'center'"
    >
      <DialogTrigger
        class="flex items-center justify-center border interactive border-secondary hover:bg-secondary/80 bg-background size-8"
      >
        <Search class="size-4" />
        <span class="sr-only">{{ t('commandBar.title') }}</span>
      </DialogTrigger>
    </Tooltip>
    <DialogPortal>
      <DialogOverlay class="bg-background/80 fixed inset-0 z-[90]" />
      <DialogContent
        class="fixed top-[1%] md:top-[15%] left-[50%] max-h-96 w-[90vw] max-w-4xl translate-x-[-50%] text-sm overflow-hidden border bg-background border-muted-foreground/30 focus:outline-none z-[100]"
      >
        <VisuallyHidden>
          <DialogTitle>{{ t('commandBar.title') }}</DialogTitle>
          <DialogDescription>{{ t('commandBar.description') }}</DialogDescription>
        </VisuallyHidden>

        <ComboboxRoot :open="true">
          <ComboboxInput
            :placeholder="`${t('verb.search')}&hellip;`"
            class="sticky top-0 right-0 font-mono bg-background border-b border-secondary w-full px-4 py-3 text-foreground outline-none placeholder-muted-foreground !select-all"
            @keydown.enter.prevent
          />
          <ComboboxContent
            class="border-t border-muted-foreground/30 p-2 overflow-y-auto h-[20rem]"
            @escape-key-down="open = false"
          >
            <ComboboxEmpty class="text-center text-muted-foreground p-4">
              {{ t('sidebar.noResults') }}
            </ComboboxEmpty>

            <ComboboxGroup>
              <ComboboxLabel class="px-4 text-muted-foreground font-semibold mt-3 mb-3 font-mono">
                {{ t('commandBar.documents') }}
              </ComboboxLabel>
              <ComboboxItem
                v-for="item in allItemsTodo"
                :key="item.id"
                @select="handleSelect(item.id)"
                :value="item.project_data.name"
                class="cursor-default font-mono text-xs px-4 py-2 rounded-md text-foreground data-[highlighted]:bg-muted inline-flex w-full items-center gap-4"
              >
                <span>{{ item.project_data.name }}</span>
              </ComboboxItem>
            </ComboboxGroup>
            <ComboboxGroup>
              <ComboboxLabel class="px-4 text-muted-foreground font-semibold mt-3 mb-3 font-mono">
                {{ t('commandBar.actions') }}
              </ComboboxLabel>
              <ComboboxItem
                :value="t('commandBar.focusEditor')"
                v-if="!isMobile"
                @select="focusEditor()"
                class="cursor-default font-mono text-xs px-4 py-2 rounded-md text-foreground data-[highlighted]:bg-muted inline-flex w-full items-center gap-4"
              >
                <span>{{ t('commandBar.focusEditor') }}</span>
              </ComboboxItem>
              <ComboboxItem
                :value="t('sidebar.newDocument')"
                @select="new_document()"
                class="cursor-default font-mono text-xs px-4 py-2 rounded-md text-foreground data-[highlighted]:bg-muted inline-flex w-full items-center gap-4"
              >
                <span>{{ t('sidebar.newDocument') }}</span>
              </ComboboxItem>
              <ComboboxItem
                value="importar db"
                @select="counter.showImportModal = true"
                class="cursor-default font-mono text-xs px-4 py-2 rounded-md text-foreground data-[highlighted]:bg-muted inline-flex w-full items-center gap-4"
              >
                <span>{{ t('settings.import') }}</span>
              </ComboboxItem>
              <ComboboxItem
                value="exportar db"
                @select="counter.showShareModal = true"
                class="cursor-default font-mono text-xs px-4 py-2 rounded-md text-foreground data-[highlighted]:bg-muted inline-flex w-full items-center gap-4"
              >
                <span>{{ t('settings.export') }}</span>
              </ComboboxItem>
            </ComboboxGroup>
          </ComboboxContent>
        </ComboboxRoot>
        <button
          @click="close"
          class="absolute top-0 size-6 flex justify-center items-center m-3 right-0 z-[999] text-foreground"
        >
          <X class="size-4" />
        </button>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>