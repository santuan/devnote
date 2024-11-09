<script setup>
import {
  ContextMenuContent,
  ContextMenuItem,

  ContextMenuPortal,

  ContextMenuRoot,
  ContextMenuSeparator,

  ContextMenuTrigger,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from 'radix-vue'


import { shallowRef } from "vue";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { EditorContent } from "@tiptap/vue-3";
import { useI18n } from 'vue-i18n';
import { useAddImage } from '@/composables/useAddImage';
import { useAddImageBase64 } from '@/composables/useAddImageBase64';
import { useAddVideo } from '@/composables/useAddVideo';


const counter = useCounterStore();
const { editor } = storeToRefs(counter);
const { addImage } = useAddImage(editor);
const { addImageBase64 } = useAddImageBase64(editor);
const { addVideo } = useAddVideo(editor);
const { t } = useI18n();


const fileInput = shallowRef(null);

const triggerFileUpload = () => {
  fileInput.value?.click();
};

const handleFileChange = (event) => {
  const file = (event.target).files?.[0];
  if (file) addImageBase64(file);
};

</script>

<template>
  <ContextMenuRoot v-if="editor">
    <ContextMenuTrigger as-child>
      <slot />
    </ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent
        class="min-w-[220px] z-30 bg-secondary text-foreground outline-none rounded-md p-[5px] shadow data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        :side-offset="5"
      >
        <ContextMenuItem
          @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()"
          class="text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none"
          :value="t('toolbar.insertTable')"
        >
          {{ t('toolbar.insertTable') }}
        </ContextMenuItem>
        <ContextMenuItem
          @click="editor.chain().focus().addColumnBefore().run()"
          :disabled="!editor.can().addColumnBefore()"
          class="text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400"
          :value="t('toolbar.addColumnBefore')"
        >
          {{ t('toolbar.addColumnBefore') }}
        </ContextMenuItem>
        <ContextMenuItem
          @click="editor.chain().focus().addColumnAfter().run()"
          :disabled="!editor.can().addColumnAfter()"
          class="text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400"
          :value="t('toolbar.addColumnAfter')"
        >
          {{ t('toolbar.addColumnAfter') }}
        </ContextMenuItem>
        <ContextMenuItem
          @click="editor.chain().focus().addRowBefore().run()"
          :disabled="!editor.can().addRowBefore()"
          class="text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400"
          :value="t('toolbar.addRowBefore')"
        >
          {{ t('toolbar.addRowBefore') }}
        </ContextMenuItem>
        <ContextMenuItem
          @click="editor.chain().focus().addRowAfter().run()"
          :disabled="!editor.can().addRowAfter()"
          class="text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400"
          :value="t('toolbar.addRowAfter')"
        >
          {{ t('toolbar.addRowAfter') }}
        </ContextMenuItem>
        <ContextMenuSeparator class="h-0.5 border-t border-muted-foreground my-1" />
       
        <ContextMenuItem
          @click="editor.chain().focus().deleteRow().run()"
          :disabled="!editor.can().deleteRow()"
          class="text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400"
          :value="t('toolbar.deleteRow')"
        >
          {{ t('toolbar.deleteRow') }}
        </ContextMenuItem>
        <ContextMenuItem
          @click="editor.chain().focus().deleteColumn().run()"
          :disabled="!editor.can().deleteColumn()"
          class="text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400"
          :value="t('toolbar.deleteColumn')"
        >
          {{ t('toolbar.deleteColumn') }}
        </ContextMenuItem>
        <ContextMenuItem
          @click="editor.chain().focus().deleteTable().run()"
          :disabled="!editor.can().deleteTable()"
          class="text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400"
          :value="t('toolbar.deleteTable')"
        >
          {{ t('toolbar.deleteTable') }}
        </ContextMenuItem>
        <ContextMenuSeparator class="h-0.5 border-t border-muted-foreground my-1" />
        <ContextMenuItem
          @click="editor.chain().focus().mergeCells().run()"
          class="text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400"
          :disabled="!editor.can().mergeCells()"
          :value="t('toolbar.mergeCells')"
        >
          {{ t('toolbar.mergeCells') }}
        </ContextMenuItem>
        <ContextMenuItem
          @click="editor.chain().focus().splitCell().run()"
          class="text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400"
          :disabled="!editor.can().splitCell()"
          :value="t('toolbar.splitCell')"
        >
          {{ t('toolbar.splitCell') }}
        </ContextMenuItem>
        <ContextMenuSeparator class="h-0.5 border-t border-muted-foreground my-1" />

        <ContextMenuItem
          @click="addVideo"
          class="text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400"
        >
          <span>{{ t('verb.add') }} Youtube video</span>
        </ContextMenuItem>
        <ContextMenuItem
          @click="triggerFileUpload"
          class="text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400"
        >
          <span>{{ t('verb.add') }} Base64 {{ t('toolbar.image') }}</span>
        </ContextMenuItem>
        <ContextMenuItem
          @click="addImage"
          class="text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400"
        >
          <span>{{ t('verb.add') }} {{ t('toolbar.image') }} url</span>
        </ContextMenuItem>
        <input
          ref="fileInput"
          type="file"
          accept="image/jpeg"
          class="hidden"
          @change="handleFileChange"
        >
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>

<style></style>
