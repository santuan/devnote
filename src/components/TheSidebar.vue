<script setup>
import SidebarTop from "@/components/SidebarTop.vue";
import SidebarProjects from "@/components/SidebarProjects.vue";
import SidebarBottom from "./SidebarBottom.vue";

import { shallowRef, watch } from "vue";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

import { useDropZone, useMagicKeys, whenever, } from "@vueuse/core";
import { useI18n } from 'vue-i18n';

const counter = useCounterStore();
const { editor } = storeToRefs(counter);
const dropZoneRef = shallowRef();
const { isOverDropZone } = useDropZone(dropZoneRef);
const keys = useMagicKeys();
const magicFocusSidebar = keys["ctrl+shift+alt+ArrowLeft"];
const magicFocusTitle = keys["ctrl+shift+alt+ArrowRight"];
const magicFocusEditor = keys["ctrl+shift+alt+ArrowDown"];
const magicEditorToolbar = keys["ctrl+shift+alt+ArrowUp"];
const { t } = useI18n();


whenever(magicFocusSidebar, (n) => {
  if (n)
    counter.setFocusSidebar()
})

whenever(magicFocusTitle, (n) => {
  if (n)  
    counter.SetFocusTitle()
})

whenever(magicFocusEditor, (n) => {
  if (n)  
    editor.value.commands.focus()
})

whenever(magicEditorToolbar, (n) => {
  if (n)  
    console.log("working")
    counter.showEditorToolbar = !counter.showEditorToolbar
})

watch(isOverDropZone, (v) => {
  if (v) counter.showImportModal = !counter.showImportModal;
});

</script>

<template>
  <div>
    <header
      ref="dropZoneRef"
      class="fixed top-0 z-[60] !select-none flex flex-col justify-start h-screen border-r lg:sticky bg-background border-secondary focus-within:ring-1 focus-within:ring-primary/50"
      :class="counter.showProjects ? 'min-w-80 max-w-80' : ' '"
    >
      <SidebarTop />
      <SidebarProjects v-show="counter.showProjects" />
      <SidebarBottom v-show="counter.showProjects" />
    </header>
    <button
      v-show="counter.showProjects"
      @click="counter.showProjects = !counter.showProjects"
      class="fixed inset-0 !z-[51] bg-background/90 !border-0 !ring-0 !outline-none lg:hidden"
    >
      <span class="sr-only">{{ t('verb.close') }} panel</span>
    </button>
  </div>
</template>