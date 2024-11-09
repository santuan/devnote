<script setup>

import EditorTitle from "./ui/Tiptap/EditorTitle.vue";
import EditorToolbar from "./ui/Tiptap/EditorToolbar.vue";
import Editor from "@/components/ui/Tiptap/EditorTipTap.vue";
import SplashScreen from "./ui/SplashScreen.vue";

import { useCounterStore } from "@/stores/counter";
import { useI18n } from 'vue-i18n';
import { storeToRefs } from "pinia";

const counter = useCounterStore();
const { showEditorToolbar } = storeToRefs(counter);
const { t } = useI18n();

</script>

<template>
  <div :key="counter.loaded_id">
    <main
      class="editor"
    >
      <div
        class="editor-top"
        v-if="counter.content_editable"
        :class="showEditorToolbar && 'with-toolbar'"
      >
        <EditorTitle />
        <EditorToolbar v-if="showEditorToolbar" />
      </div>
      <Editor
        v-if="!counter.content_editable"
        v-model="counter.project_body"
        class="preview-editor'"
      >
        <h2 class="px-0 md:p-4 mb-0 font-serif text-4xl md:text-5xl text-foreground font-black text-balance">
          {{ counter.project_name }}
        </h2>
      </Editor>
      <Editor
        v-if="counter.content_editable"
        v-model="counter.project_body"
        :toolbar="showEditorToolbar"
        editable
      />
      <SplashScreen v-if="counter.loaded_id === '' && counter.content_editable === false" />
    </main>
    <button
      v-show="!counter.loaded_id"
      v-if="counter.content_editable"
      @click="counter.create_project()"
      :disabled="counter.project_name === ''"
      :class="counter.project_name
        ? 'bg-primary text-primary-foreground hover:bg-primary/80'
        : 'disabled bg-secondary  pointer-events-none'
      "
      class="fixed !select-none bottom-0 right-0 z-20 h-12 px-3 text-xs text-right  left-0  GuardarDocumento disabled:text-foreground/50 focus:bg-primary/50"
    >
      {{ t('editor.save') }}
    </button>
  </div>
</template>

<style scoped>
.editor {
  @apply relative mx-auto lg:w-full px-2 gap-y-0.5 pt-1;
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr;
}

.editor-top {
  @apply bg-background z-50;

}
</style>