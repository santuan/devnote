<script setup>

import Tooltip from "@/components/ui/Tooltip.vue";

import { shallowRef } from "vue";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

import { onClickOutside } from "@vueuse/core";
import { Check, DatabaseZap } from "lucide-vue-next";
import { useI18n } from 'vue-i18n';

const counter = useCounterStore();
const { file_name } = storeToRefs(counter);

const target = shallowRef(null);
const editing = shallowRef(false);
const input = shallowRef(file_name);
const { t } = useI18n();

function editDatabaseTitle() {
  editing.value = !editing.value;
}

onClickOutside(target, () => {
  editing.value = false;
});

</script>

<template>
  <div
    class="DataBaseTitle flex items-center justify-center mx-1.5 mb-2 mt-1 text-sm border group bg-secondary/40 hover:bg-secondary/90 border-secondary"
    :class="editing ? ' !border !border-primary' : ' '"
  >
    <button
      v-if="!editing"
      @click="editDatabaseTitle()"
      class="flex items-center justify-between w-full h-8 gap-1 pl-2 hover:outline-none hover:!ring-1 hover:ring-primary text-primary"
    >
      <span v-if="!file_name"> Escriba un título </span>
      <span v-else>
        {{ file_name }}
      </span>
      <Tooltip
        :name="t('settings.editDBname')"
        side="top"
        :align="'end'"
      >
        <span
          class="flex items-center justify-center duration-100 border border-transparent size-8 shrink-0 bg-background "
        >
          <DatabaseZap class="size-4 text-primary" />
        </span>
      </Tooltip>
    </button>
    <div
      ref="target"
      v-if="editing"
      class="flex items-center justify-between w-full h-8"
    >
      <input
        type="text"
        ref="focusedEditTitle"
        placeholder="Escriba un título"
        @keyup.enter="editDatabaseTitle()"
        class="w-full h-8 pl-2 text-sm border-0 outline-none bg-secondary text-foreground border-secondary"
        v-model="input"
      >
      <button
        class="flex items-center justify-center outline-none size-8 shrink-0 bg-primary/80 hover:bg-primary/90 focus-visible:ring-2 ring-primary-foreground"
        @click="editDatabaseTitle()"
      >
        <Check class="size-4 text-primary-foreground" />
      </button>
    </div>
  </div>
</template>