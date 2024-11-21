<script setup>
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from 'radix-vue'

import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { useI18n } from 'vue-i18n';
import { useAddImage } from '@/composables/useAddImage';
import { useAddVideo } from '@/composables/useAddVideo';
import { useSetVideo } from '@/composables/useSetVideo';
import { useAddImageBase64 } from '@/composables/useAddImageBase64';


const counter = useCounterStore();
const { editor } = storeToRefs(counter);
const { addImage } = useAddImage(editor);
const { addVideo } = useAddVideo(editor);
const { setVideo } = useSetVideo(editor);
const { addImageBase64 } = useAddImageBase64(editor);
const { t } = useI18n();
</script>

<template>
  <ContextMenuRoot v-if="editor">
    <ContextMenuTrigger as-child>
      <slot />
    </ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent
        class="min-w-[220px] z-10 font-mono bg-background/90 ring-1 ring-primary text-foreground outline-none rounded p-1.5 shadow"
        :side-offset="5"
      >
        <ContextMenuItem
          @click="addVideo"
          class="cursor-default text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400 data-[highlighted]:bg-primary/20"
          :value="t('verb.add')"
        >
          <span>{{ t('verb.add') }} Youtube video</span>
        </ContextMenuItem>
        <ContextMenuItem
          @click="setVideo"
          class="cursor-default text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400 data-[highlighted]:bg-primary/20"
          :value="t('verb.add')"
        >
          <span>{{ t('verb.add') }} video by url</span>
        </ContextMenuItem>
        <ContextMenuItem
          @click="addImage"
          class="cursor-default text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400 data-[highlighted]:bg-primary/20"
          :value="t('toolbar.image')"
        >
          <span>{{ t('verb.add') }} {{ t('toolbar.image') }} url</span>
        </ContextMenuItem>
        <ContextMenuItem
          as="label"
          for="img-uploader"
          disabled
          id="uploader"
          class="cursor-defaul relative text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400 data-[highlighted]:bg-primary/20"
        >
          <span>{{ t('verb.add') }} {{ t('toolbar.image') }} Base64</span>
          <input
            id="img-uploader"
            type="file"
            accept="image/jpeg"
            class="absolute inset-0 opacity-0"
            :aria-label="`${t('verb.add')} Base64 ${t('toolbar.image')}`"
            @change="addImageBase64"
          >
        </ContextMenuItem>
        <ContextMenuSeparator class="h-[0.0125rem] bg-secondary my-1" />
        <ContextMenuLabel class="text-xs px-2 text-primary uppercase py-2 ">
          {{t('toolbar.table')}} <span class="bg-primary text-primary-foreground lowercase px-1 py-0.5 scale-50 relative origin-center ">experimental</span>
        </ContextMenuLabel>
        <ContextMenuItem
          @click="editor.chain().focus().insertTable({ rows: 2, cols: 2, withHeaderRow: true }).run()"
          class="cursor-default text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400 data-[highlighted]:bg-primary/20"
          :value="t('toolbar.insertTable')"
        >
          {{ t('toolbar.insertTable') }}
        </ContextMenuItem>
        <ContextMenuItem
          @click="editor.chain().focus().addColumnBefore().run()"
          :disabled="!editor.can().addColumnBefore()"
          class="cursor-default text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400 data-[highlighted]:bg-primary/20"
          :value="t('toolbar.addColumnBefore')"
        >
          {{ t('toolbar.addColumnBefore') }}
        </ContextMenuItem>
        <ContextMenuItem
          @click="editor.chain().focus().addColumnAfter().run()"
          :disabled="!editor.can().addColumnAfter()"
          class="cursor-default text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400 data-[highlighted]:bg-primary/20"
          :value="t('toolbar.addColumnAfter')"
        >
          {{ t('toolbar.addColumnAfter') }}
        </ContextMenuItem>
        <ContextMenuItem
          @click="editor.chain().focus().addRowBefore().run()"
          :disabled="!editor.can().addRowBefore()"
          class="cursor-default text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400 data-[highlighted]:bg-primary/20"
          :value="t('toolbar.addRowBefore')"
        >
          {{ t('toolbar.addRowBefore') }}
        </ContextMenuItem>
        <ContextMenuItem
          @click="editor.chain().focus().addRowAfter().run()"
          :disabled="!editor.can().addRowAfter()"
          class="cursor-default text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400 data-[highlighted]:bg-primary/20"
          :value="t('toolbar.addRowAfter')"
        >
          {{ t('toolbar.addRowAfter') }}
        </ContextMenuItem>
        <ContextMenuSeparator class="h-[0.0125rem] bg-secondary my-1" />
        <ContextMenuItem
          @click="editor.chain().focus().deleteTable().run()"
          :disabled="!editor.can().deleteTable()"
          class="cursor-default text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400 data-[highlighted]:bg-primary/20"
          :value="t('toolbar.deleteTable')"
        >
          {{ t('toolbar.deleteTable') }}
        </ContextMenuItem>
        <ContextMenuItem
          @click="editor.chain().focus().deleteColumn().run()"
          :disabled="!editor.can().deleteColumn()"
          class="cursor-default text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400 data-[highlighted]:bg-primary/20"
          :value="t('toolbar.deleteColumn')"
        >
          {{ t('toolbar.deleteColumn') }}
        </ContextMenuItem>
        <ContextMenuItem
          @click="editor.chain().focus().deleteRow().run()"
          :disabled="!editor.can().deleteRow()"
          class="cursor-default text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400 data-[highlighted]:bg-primary/20"
          :value="t('toolbar.deleteRow')"
        >
          {{ t('toolbar.deleteRow') }}
        </ContextMenuItem>
        <ContextMenuSeparator class="h-[0.0125rem] bg-secondary my-1" />
        <ContextMenuItem
          @click="editor.chain().focus().mergeCells().run()"
          class="cursor-default text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400 data-[highlighted]:bg-primary/20"
          :disabled="!editor.can().mergeCells()"
          :value="t('toolbar.mergeCells')"
        >
          {{ t('toolbar.mergeCells') }}
        </ContextMenuItem>
        <ContextMenuItem
          @click="editor.chain().focus().splitCell().run()"
          class="cursor-default text-xs flex items-center h-6 px-2 hover:bg-primary/20 outline-none disabled:cursor-not-allowed disabled:text-gray-400 data-[highlighted]:bg-primary/20"
          :disabled="!editor.can().splitCell()"
          :value="t('toolbar.splitCell')"
        >
          {{ t('toolbar.splitCell') }}
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>

<style scoped>
[data-disabled] {
  @apply opacity-60 pointer-events-none
}
</style>
