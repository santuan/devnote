<script setup>

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "radix-vue";
import { Upload, X } from "lucide-vue-next";
import { onMounted, shallowRef, watch } from "vue";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import {  refDebounced, useMagicKeys, whenever } from "@vueuse/core";
import Tooltip from "./ui/Tooltip.vue";

const keys = useMagicKeys();
const magicShareDB = keys["ctrl+alt+e"];



const counter = useCounterStore();
const { file_name, showShareModal } = storeToRefs(counter);
const input = shallowRef(file_name);
const debounced = refDebounced(input, 100);

watch(debounced, (v) => {
  if (v) counter.share_database();
});

whenever(magicShareDB, (n) => {
  if (n)
    counter.showShareModal = true
})


onMounted(() => {
  counter.share_database();
});
</script>

<template>
  <DialogRoot v-model:open="showShareModal">
    <Tooltip
      shortcut="ctrl+alt+e"
      side="top"
    >
      <DialogTrigger
        class="flex items-center justify-center h-12 gap-2 px-2 text-xs border outline-none border-secondary bg-background hover:bg-background/50 focus-visible:border-primary focus-visible:bg-primary/10"
        aria-label="Update dimensions"
      >
        <Upload class="size-4" />
        <span class="">{{ t('settings.export') }}</span>
      </DialogTrigger>
    </Tooltip>
    <DialogPortal>
      <DialogOverlay
        class="bg-secondary/90 data-[state=open]:animate-overlayShow fixed inset-0 z-[200]"
      />
      <DialogContent
        class="data-[state=open]:animate-contentShow font-mono fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-background p-3 md:p-6 md:pt-4 shadow focus:outline-none z-[9000]"
      >
        <DialogTitle class="text-foreground flex items-center justify-start gap-3 m-0 text-[17px] font-semibold">
          <Upload class="size-5" />
          {{ t('settings.export') }}
        </DialogTitle>
        <DialogDescription class="mt-6 mb-2 text-sm text-foreground">
          {{ t('exportDB.description') }}
        </DialogDescription>
        <div class="flex gap-2 mb-2">
          <input
            type="text"
            class="w-full h-8 px-2 border bg-background text-foreground border-border outline-none focus:ring-1 focus:ring-primary"
            v-model="input"
          >
          <button
            class="ml-auto text-xs font-medium border bg-primary h-8 border-secondary shrink-0 text-primary-foreground hover:bg-primary/80 focus:outline-none px-[15px] focus-visible:ring-2 focus-visible:ring-white"
            @click="counter.export_database(input.value)"
          >
            {{ t('settings.export') }}
          </button>
        </div>
        <DialogClose class="absolute top-0 size-6 flex justify-center items-center m-3 right-0 z-[999] text-foreground">
          <X class="size-4" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
