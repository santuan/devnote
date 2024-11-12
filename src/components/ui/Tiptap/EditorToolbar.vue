<script setup>
import {
  DropdownMenuArrow,
  DropdownMenuRoot,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuPortal,
  ToolbarButton,
  ToolbarRoot,
} from "radix-vue";
import Tooltip from "@/components/ui/Tooltip.vue";

import "medium-zoom/dist/style.css";

import { useStorage } from "@vueuse/core";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { useAddImage } from '@/composables/useAddImage';
import { useAddImageBase64 } from '@/composables/useAddImageBase64';
import { useAddVideo } from '@/composables/useAddVideo';
import { useSetLink } from '@/composables/useSetLink';
import { useSetVideo } from '@/composables/useSetVideo';

import { Italic, ImagePlus, Bold, Strikethrough, Code, RemoveFormatting, Eraser, List, ListOrdered, Quote, Minus, Undo2, Redo2, AlignLeft, AlignCenter, AlignRight, AlignJustify, Link2, Unlink2, Video, ChevronDown, ImageDown, Youtube, Table, Square } from "lucide-vue-next";
import { useI18n } from 'vue-i18n';

const counter = useCounterStore();
const showEditorToolbar = useStorage("editorToolbar", true);
const { editor } = storeToRefs(counter);
const { t } = useI18n();

const { addImage } = useAddImage(editor);
const { addImageBase64 } = useAddImageBase64(editor);
const { addVideo } = useAddVideo(editor);
const { setLink } = useSetLink(editor);
const { setVideo } = useSetVideo(editor);

</script>


<template>
  <div
    class="pt-1 z-10 relative bg-background"
    v-if="editor"
  >
    <div
      class="relative grid w-full max-w-full  gap-1 mx-auto control-group"
    >
      <ToolbarRoot class="flex justify-start select-none mb-2 button-group md:w-auto">
        <DropdownMenuRoot>
          <ToolbarButton as-child>
            <DropdownMenuTrigger class="headingSelector">
              <template v-if="editor.isActive('heading', { level: 1 })">
                {{ t('toolbar.heading1') }}
              </template>
              <template v-else-if="editor.isActive('heading', { level: 2 })">
                {{ t('toolbar.heading2') }}
              </template>
              <template v-else-if="editor.isActive('heading', { level: 3 })">
                {{ t('toolbar.heading3') }}
              </template>
              <template v-else-if="editor.isActive('heading', { level: 4 })">
                {{ t('toolbar.heading4') }}
              </template>
              <template v-else-if="editor.isActive('heading', { level: 5 })">
                {{ t('toolbar.heading5') }}
              </template>
              <template v-else-if="editor.isActive('heading', { level: 6 })">
                {{ t('toolbar.heading6') }}
              </template>
              <template v-else>
                {{ t('toolbar.paragraph') }}
              </template>
              <ChevronDown class="size-4 shrink-0" />
            </DropdownMenuTrigger>
          </ToolbarButton>
          <DropdownMenuContent
            :align="'start'"
            side="bottom"
            class="z-10 grid text-xs border w-44 bg-background border-secondary"
          >
            <DropdownMenuItem
              @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
              :class="{ 'is-active': editor.isActive('paragraph') }"
              class="flex items-center justify-between gap-2 p-2 pr-3 cursor-pointer hover:bg-primary/20"
            >
              {{ t('toolbar.paragraph') }}
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
              :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
              class="flex items-center justify-between gap-2 p-2 pr-3 cursor-pointer hover:bg-primary/20"
            >
              {{ t('toolbar.heading1') }}
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
              :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
              class="flex items-center justify-between gap-2 p-2 pr-3 cursor-pointer hover:bg-primary/20"
            >
              {{ t('toolbar.heading2') }}
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
              :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
              class="flex items-center justify-between gap-2 p-2 pr-3 cursor-pointer hover:bg-primary/20"
            >
              {{ t('toolbar.heading3') }}
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
              :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
              class="flex items-center justify-between gap-2 p-2 pr-3 cursor-pointer hover:bg-primary/20"
            >
              {{ t('toolbar.heading4') }}
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
              :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
              class="flex items-center justify-between gap-2 p-2 pr-3 cursor-pointer hover:bg-primary/20"
            >
              {{ t('toolbar.heading5') }}
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
              :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
              class="flex items-center justify-between gap-2 p-2 pr-3 cursor-pointer hover:bg-primary/20"
            >
              {{ t('toolbar.heading6') }}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuRoot>

        <Tooltip
          :name="t('toolbar.undo')"
          side="bottom"
        >
          <ToolbarButton
            class="flex items-center justify-center border outline-none size-8 focus-visible:border-primary border-secondary"
            @click="editor.chain().focus().undo().run()"
            :disabled="!editor.can().chain().focus().undo().run()"
            :value="t('toolbar.undo')"
          >
            <Undo2 class="size-4" />
            <span class="sr-only">{{ t('toolbar.undo') }}</span>
          </ToolbarButton>
        </Tooltip>
        <Tooltip
          :name="t('toolbar.redo')"
          side="bottom"
        >
          <ToolbarButton
            class="flex items-center justify-center border outline-none size-8 focus-visible:border-primary border-secondary"
            @click="editor.chain().focus().redo().run()"
            :disabled="!editor.can().chain().focus().redo().run()"
            :value="t('toolbar.redo')"
          >
            <Redo2 class="size-4" />
            <span class="sr-only">{{ t('toolbar.redo') }}</span>
          </ToolbarButton>
        </Tooltip>

        <DropdownMenuRoot>
          <ToolbarButton as-child>
            <DropdownMenuTrigger class="data-[state=open]:!bg-primary data-[state=open]:text-primary-foreground relative">
              <Tooltip
                :name="`${t('verb.add')} ${t('toolbar.image')}`"
                :side="'bottom'"
              >
                <span
                  class="flex items-center justify-center outline-none interactive size-8 focus-visible:border-primary border-secondary"
                >
                  <ImagePlus class="size-4" />
                </span>
                <span class="sr-only">{{ t('verb.add') }} {{ t('toolbar.image') }}</span>
              </Tooltip>
            </DropdownMenuTrigger>
          </ToolbarButton>
          <DropdownMenuContent
            :side="'bottom'"
            :align="'start'"
            class="z-50 grid w-32 text-xs gap-1 bg-background border-2 border-primary"
          >
            <DropdownMenuItem
              as-child
              class="relative flex items-center justify-start  gap-2 p-2 pr-3 bg-background outline-none focus-visible:bg-primary/30 hover:bg-primary/20"
            >
              <label
                class="flex justify-start gap-2 p-2 hover:bg-primary"
                for="img-uploader"
                id="uploader"
              >
                <ImagePlus class="size-4" />
                <span>Base64</span>
                <input
                  id="img-uploader"
                  type="file"
                  accept="image/jpeg"
                  class="absolute inset-0 opacity-0"
                  :aria-label="`${t('verb.add')} Base64 ${t('toolbar.image')}`"
                  @change="addImageBase64"
                >
              </label>
            </DropdownMenuItem>
            <DropdownMenuItem
              @click="addImage"
              class="flex items-center justify-start  gap-2 p-2 bg-background outline-none focus-visible:bg-primary/20 hover:bg-primary/20"
            >
              <ImageDown class="size-4" />
              Url
              <span class="sr-only">{{ t('verb.add') }} {{ t('toolbar.image') }} url</span>
            </DropdownMenuItem>
            <DropdownMenuArrow />
          </DropdownMenuContent>
        </DropdownMenuRoot>
        <Tooltip
          :name="`${t('verb.add')} Youtube video`"
          side="bottom"
        >
          <ToolbarButton
            @click="addVideo"
            class="flex items-center justify-center outline-none interactive size-8 focus-visible:border-primary border-secondary"
            :value="`${t('verb.add')} Youtube video`"
          >
            <Youtube class="size-4" />
            <span class="sr-only">{{ t('verb.add') }} Youtube video</span>
          </ToolbarButton>
        </Tooltip>
        <Tooltip
          name="Video URL"
          side="bottom"
        >
          <ToolbarButton
            class="flex items-center justify-center border outline-none size-8 focus-visible:border-primary border-secondary"
            @click="setVideo()"
            value="Video URL"
          >
            <Video class="size-4" />
            <span class="sr-only">{{ t('verb.add') }} video URL</span>
          </ToolbarButton>
        </Tooltip>

        <template v-if="showEditorToolbar">
          <Tooltip
            :name="t('toolbar.bold')"
            shortcut="Ctrl B"
            side="bottom"
          >
            <ToolbarButton
              @click="editor.chain().focus().toggleBold().run()"
              :disabled="!editor.can().chain().focus().toggleBold().run()"
              :class="{ 'is-active': editor.isActive('bold') }"
              class="interactive"
              :value="t('toolbar.bold')"
            >
              <Bold />
              <span class="sr-only">{{ t('toolbar.bold') }}</span>
            </ToolbarButton>
          </Tooltip>
          <Tooltip
            :name="t('toolbar.italic')"
            shortcut="Ctrl I"
            side="bottom"
          >
            <ToolbarButton
              @click="editor.chain().focus().toggleItalic().run()"
              :disabled="!editor.can().chain().focus().toggleItalic().run()"
              :class="{ 'is-active': editor.isActive('italic') }"
              class="interactive"
              :value="t('toolbar.italic')"
            >
              <Italic />
              <span class="sr-only">{{ t('toolbar.italic') }}</span>
            </ToolbarButton>
          </Tooltip>
          <Tooltip
            :name="t('toolbar.strike')"
            side="bottom"
            shortcut="Ctrl Shift S"
          >
            <ToolbarButton
              @click="editor.chain().focus().toggleStrike().run()"
              :disabled="!editor.can().chain().focus().toggleStrike().run()"
              :class="{ 'is-active': editor.isActive('strike') }"
              class="interactive"
              :value="t('toolbar.strike')"
            >
              <Strikethrough />
              <span class="sr-only">{{ t('toolbar.strike') }}</span>
            </ToolbarButton>
          </Tooltip>
          <DropdownMenuRoot>
            <ToolbarButton as-child>
              <DropdownMenuTrigger>
                <Tooltip
                  :name="t('toolbar.textAlign')"
                  side="bottom"
                >
                  <span class="flex items-center justify-center w-full bg-secondary interactive h-full">
                    <template v-if="editor.isActive({ textAlign: 'center' })">
                      <AlignCenter class="size-6" />
                    </template>
                    <template v-else-if="editor.isActive({ textAlign: 'right' })">
                      <AlignRight class="size-6" />
                    </template>
                    <template v-else-if="editor.isActive({ textAlign: 'justify' })">
                      <AlignJustify class="size-6" />
                    </template>
                    <template v-else>
                      <AlignLeft class="size-6" />
                    </template>
                    <span class="sr-only">{{ t('toolbar.textAlign') }}</span>
                  </span>
                </Tooltip>
              </DropdownMenuTrigger>
            </ToolbarButton>
            <DropdownMenuContent
              align="start"
              side="bottom"
              class="z-50 grid w-32 text-xs bg-secondary"
            >
              <DropdownMenuItem
                @click="editor.chain().focus().setTextAlign('left').run()"
                class="flex items-center justify-between gap-2 p-2 pr-3 bg-background outline-none focus-visible:bg-primary/30  hover:bg-primary/20"
                :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
              >
                <div class="flex items-center justify-start gap-3 p-1">
                  <AlignLeft class="size-4" />
                  <span class="sr-only">{{ t('toolbar.alignLeft') }}</span>
                </div>
                <kbd
                  class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[8px] font-medium text-muted-foreground opacity-100"
                >
                  Ctrl Shift L
                </kbd>
              </DropdownMenuItem>
              <DropdownMenuItem
                @click="editor.chain().focus().setTextAlign('center').run()"
                class="flex items-center justify-between gap-2 p-2 pr-3 bg-background outline-none focus-visible:bg-primary/30  hover:bg-primary/20"
                :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
              >
                <div class="flex items-center justify-start gap-3 p-1">
                  <AlignCenter class="size-4" />
                  <span class="sr-only">{{ t('toolbar.alignCenter') }}</span>
                </div>
                <kbd
                  class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[8px] font-medium text-muted-foreground opacity-100"
                >
                  Ctrl Shift E
                </kbd>
              </DropdownMenuItem>
              <DropdownMenuItem
                @click="editor.chain().focus().setTextAlign('right').run()"
                class="flex items-center justify-between gap-2 p-2 pr-3 bg-background outline-none focus-visible:bg-primary/30  hover:bg-primary/20"
                :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
              >
                <div class="flex items-center justify-start gap-3 p-1">
                  <AlignRight class="size-4" />
                  <span class="sr-only">{{ t('toolbar.alignRight') }}</span>
                </div>
                <kbd
                  class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[8px] font-medium text-muted-foreground opacity-100"
                >
                  Ctrl Shift R
                </kbd>
              </DropdownMenuItem>
              <DropdownMenuItem
                @click="editor.chain().focus().setTextAlign('justify').run()"
                class="flex items-center justify-between gap-2 p-2 pr-3 bg-background outline-none focus-visible:bg-primary/30  hover:bg-primary/20"
                :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
              >
                <div class="flex items-center justify-start gap-3 p-1">
                  <AlignJustify class="size-4" />
                  <span class="sr-only">{{ t('toolbar.alignJustify') }}</span>
                </div>
                <kbd
                  class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[8px] font-medium text-muted-foreground opacity-100"
                >
                  Ctrl Shift J
                </kbd>
              </DropdownMenuItem>
              <DropdownMenuItem
                @click="editor.chain().focus().unsetTextAlign().run()"
                class="flex items-center justify-between p-2 pr-3 bg-background outline-none focus-visible:bg-primary/30  hover:bg-primary/20"
              >
                <div class="flex items-center justify-start gap-3 p-1">
                  <Square class="size-4" />
                  <span class="sr-only">{{ t('toolbar.noAlignment') }}</span>
                </div>
                <kbd
                  class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[8px] font-medium ml-auto text-muted-foreground opacity-100"
                >
                  Ctrl Shift L
                </kbd>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuRoot>

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
          <Tooltip
            :name="t('toolbar.code')"
            side="bottom"
            shortcut="Ctrl E"
          >
            <ToolbarButton
              @click="editor.chain().focus().toggleCode().run()"
              :disabled="!editor.can().chain().focus().toggleCode().run()"
              :class="{ 'is-active': editor.isActive('code') }"
              class="font-mono interactive !text-base"
              :value="t('toolbar.code')"
            >
              <span class="flex items-center justify-center text-xs rounded size-5 bg-secondary/30 text-inherit">
                A
              </span>
              <span class="sr-only">{{ t('toolbar.code') }}</span>
            </ToolbarButton>
          </Tooltip>
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
          <Tooltip
            :name="t('toolbar.link')"
            side="bottom"
          >
            <ToolbarButton
              @click="setLink"
              :class="{ 'is-active': editor.isActive('link') }"
              class="interactive"
              :value="t('toolbar.link')"
            >
              <Link2 class="-rotate-45" />
              <span class="sr-only">{{ t('toolbar.link') }}</span>
            </ToolbarButton>
          </Tooltip>
          <Tooltip
            :name="t('toolbar.unlink')"
            side="bottom"
          >
            <ToolbarButton
              @click="editor.chain().focus().unsetLink().run()"
              :disabled="!editor.isActive('link')"
              class="interactive"
              :value="t('toolbar.unlink')"
            >
              <Unlink2 class="-rotate-45" />
              <span class="sr-only">{{ t('toolbar.unlink') }}</span>
            </ToolbarButton>
          </Tooltip>

          <DropdownMenuRoot>
            <ToolbarButton as-child>
              <DropdownMenuTrigger class="data-[state=open]:!bg-primary data-[state=open]:text-primary-foreground relative">
                <Tooltip
                  :name="t('toolbar.table')"
                  :side="'bottom'"
                  :align="'end'"
                  shortcut="Right click on editor"
                >
                  <span class="flex items-center justify-center outline-none interactive size-8 focus-visible:border-primary border-secondary">
                    <Table class="size-4 shrink-0" />
                  </span>
                  <span class="sr-only">{{ t('toolbar.table') }}</span>
                </Tooltip>
              </DropdownMenuTrigger>
            </ToolbarButton>
            <DropdownMenuPortal>
              <DropdownMenuContent
                :side="'bottom'"
                class="z-10 text-foreground font-mono grid p-1.5 text-xs border w-60 bg-background border-secondary"
              >
                <DropdownMenuItem
                  @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()"
                  class="cursor-default flex items-center justify-between gap-2 p-2 pr-3 outline-none focus-visible:bg-primary/30 text-xs hover:bg-primary/20"
                >
                  {{ t('toolbar.insertTable') }}
                </DropdownMenuItem>
                <DropdownMenuItem
                  @click="editor.chain().focus().addColumnBefore().run()"
                  class="cursor-default flex items-center justify-between gap-2 p-2 pr-3 outline-none focus-visible:bg-primary/30 text-xs hover:bg-primary/20"
                  :disabled="!editor.can().addColumnBefore()"
                >
                  {{ t('toolbar.addColumnBefore') }}
                </DropdownMenuItem>
                <DropdownMenuItem
                  @click="editor.chain().focus().addColumnAfter().run()"
                  class="cursor-default flex items-center justify-between gap-2 p-2 pr-3 outline-none focus-visible:bg-primary/30 text-xs hover:bg-primary/20"
                  :disabled="!editor.can().addColumnAfter()"
                >
                  {{ t('toolbar.addColumnAfter') }}
                </DropdownMenuItem>
                <DropdownMenuItem
                  @click="editor.chain().focus().deleteColumn().run()"
                  class="cursor-default flex items-center justify-between gap-2 p-2 pr-3 outline-none focus-visible:bg-primary/30 text-xs hover:bg-primary/20"
                  :disabled="!editor.can().deleteColumn()"
                >
                  {{ t('toolbar.deleteColumn') }}
                </DropdownMenuItem>
                <DropdownMenuSeparator class="h-[0.0125rem] bg-secondary my-1" />
                <DropdownMenuItem
                  @click="editor.chain().focus().addRowBefore().run()"
                  class="cursor-default flex items-center justify-between gap-2 p-2 pr-3 outline-none focus-visible:bg-primary/30 text-xs hover:bg-primary/20"
                  :disabled="!editor.can().addRowBefore()"
                >
                  {{ t('toolbar.addRowBefore') }}
                </DropdownMenuItem>
                <DropdownMenuItem
                  @click="editor.chain().focus().addRowAfter().run()"
                  class="cursor-default flex items-center justify-between gap-2 p-2 pr-3 outline-none focus-visible:bg-primary/30 text-xs hover:bg-primary/20"
                  :disabled="!editor.can().addRowAfter()"
                >
                  {{ t('toolbar.addRowAfter') }}
                </DropdownMenuItem>
                <DropdownMenuItem
                  @click="editor.chain().focus().deleteRow().run()"
                  class="cursor-default flex items-center justify-between gap-2 p-2 pr-3 outline-none focus-visible:bg-primary/30 text-xs hover:bg-primary/20"
                  :disabled="!editor.can().deleteRow()"
                >
                  {{ t('toolbar.deleteRow') }}
                </DropdownMenuItem>
                <DropdownMenuSeparator class="h-[0.0125rem] bg-secondary my-1" />
                <DropdownMenuItem
                  @click="editor.chain().focus().deleteTable().run()"
                  class="cursor-default flex items-center justify-between gap-2 p-2 pr-3 outline-none focus-visible:bg-primary/30 text-xs hover:bg-primary/20"
                  :disabled="!editor.can().deleteTable()"
                >
                  {{ t('toolbar.deleteTable') }}
                </DropdownMenuItem>
                <DropdownMenuSeparator class="h-[0.0125rem] bg-secondary my-1" />
                <DropdownMenuItem
                  @click="editor.chain().focus().mergeCells().run()"
                  class="cursor-default flex items-center justify-between gap-2 p-2 pr-3 outline-none focus-visible:bg-primary/30 text-xs hover:bg-primary/20"
                  :disabled="!editor.can().mergeCells()"
                >
                  {{ t('toolbar.mergeCells') }}
                </DropdownMenuItem>
                <DropdownMenuItem
                  @click="editor.chain().focus().splitCell().run()"
                  class="cursor-default flex items-center justify-between gap-2 p-2 pr-3 outline-none focus-visible:bg-primary/30 text-xs hover:bg-primary/20"
                  :disabled="!editor.can().splitCell()"
                >
                  {{ t('toolbar.splitCell') }}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenuRoot>
          <Tooltip
            :name="t('toolbar.unsetAllMarks')"
            side="bottom"
          >
            <ToolbarButton
              @click="editor.chain().focus().unsetAllMarks().run()"
              class="interactive"
              :value="t('toolbar.unsetAllMarks')"
            >
              <RemoveFormatting />
              <span class="sr-only">{{ t('toolbar.unsetAllMarks') }}</span>
            </ToolbarButton>
          </Tooltip>
          <Tooltip
            :name="t('toolbar.clearNodes')"
            side="bottom"
          >
            <ToolbarButton
              @click="editor.chain().focus().clearNodes().run()"
              class="interactive"
              :value="t('toolbar.clearNodes')"
            >
              <Eraser />
              <span class="sr-only">{{ t('toolbar.clearNodes') }}</span>
            </ToolbarButton>
          </Tooltip>
        </template>
      </ToolbarRoot>
    </div>
  </div>
</template>



<style scoped>

[data-disabled]{
  @apply opacity-60
}
.button-group {
  @apply bg-background flex flex-wrap w-full;
}

.headingSelector {
  /* grid-column: 1 / 8; */
  @apply flex items-center !text-xs !justify-between bg-background px-2;
  @apply !min-w-40 !max-w-40 w-full hover:z-10;
}

.headingSelectorTable {
  @apply flex items-center !text-xs !justify-between bg-background px-2;
  @apply !min-w-24 !max-w-24 w-full hover:z-10;
}

.button-group button {
  @apply border border-secondary focus-within:border-primary outline-none h-8 min-w-7 max-w-7 xl:max-w-full xl:flex-1 text-sm focus-visible:border-primary hover:!border-primary flex justify-center items-center duration-100;
  /* flex: 1; */
}

.control-group button {
  @apply disabled:text-foreground/30 disabled:pointer-events-none;
}

.button-group button.is-active {
  @apply bg-primary text-primary-foreground;
}

.button-group button svg {
  @apply size-3.5;
}


body:has(.cursorPointer) label {
  cursor: pointer;
}
</style>
