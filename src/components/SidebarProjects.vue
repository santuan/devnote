<script setup>
import SearchItem from "./SearchItem.vue";
import SearchItemChecked from "./SearchItemChecked.vue";
import SelectSort from "./ui/SelectSort.vue";
import ButtonCreateDocument from "./ui/ButtonCreateDocument.vue";
import EditDatabaseTitle from "./ui/EditDatabaseTitle.vue";

import { computed, watch, shallowRef } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

import { onClickOutside, refDebounced, useStorage } from "@vueuse/core";
import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from "radix-vue";
import { Search, CircleX } from "lucide-vue-next";
import { useI18n } from 'vue-i18n';

const target = shallowRef(null);
const editing = shallowRef(false);
const counter = useCounterStore();
const {
  allItemsTodo,
  allItemsChecked,
  searchTerm,
  file_name
} = storeToRefs(counter);
const { t } = useI18n();

const debounced = refDebounced(searchTerm, 300);
const input = shallowRef(file_name);
const sortOption = useStorage("sortItemsBy", "name");

onClickOutside(target, () => {
  editing.value = false;
});

watch(input, (v) => {
  if (v) counter.update_database(input.value);
  counter.auto_save();
});

const results = computed(() => {
  if (!Array.isArray(allItemsTodo.value)) {
    return [];
  }

  const sortedItems = [...allItemsTodo.value].sort((a, b) => {
    const aFixed = a.project_data?.fixed ?? false;
    const bFixed = b.project_data?.fixed ?? false;

    if (aFixed !== bFixed) {
      return bFixed - aFixed;
    }

    if (sortOption.value === "name") {
      return a.project_data?.name.localeCompare(b.project_data?.name);
    } else if (sortOption.value === "date") {
      return new Date(a.project_data?.date) - new Date(b.project_data?.date);
    }
    return 0;
  });

  return debounced.value === ""
    ? sortedItems
    : sortedItems.filter((item) => {
      return item.project_data?.name
        .toLowerCase()
        .includes(debounced.value.toLowerCase());
    });
});


</script>

<template>
  <div class="h-full @container">
    <EditDatabaseTitle />
    <ButtonCreateDocument />
    <div class="relative grid grid-cols-3 w-full gap-1 pl-1.5 pr-1 p-0.5 text-xs">
      <div
        class="relative flex items-center justify-between w-full col-span-2 border border-secondary"
        v-auto-animate="{ duration: 300 }"
      >
        <label
          class=" w-full overflow-hidden relative ring-1  ring-secondary hover:ring-primary focus-within:ring-primary"
        >
          <input
            ref="focusSearch"
            v-model="searchTerm"
            :placeholder="`${t('sidebar.search')}`"
            class="text-xs outline-none pl-1 pr-12 h-8 bg-transparent placeholder:text-xs  placeholder:text-foreground/40 "
          >
          <span class="sr-only">{{ t('sidebar.search') }}</span>
        </label>
        <span
          v-if="!searchTerm"
          class=" top-0 right-[0.015rem] flex items-center bg-primary/5 text-foreground justify-center h-8 text-xs min-w-12"
        >
          {{ allItemsTodo?.length }}
        </span>
        <button
          v-else
          class="absolute top-0 right-[0.015rem] flex items-center justify-center gap-1 px-1 text-xs font-medium min-w-12 h-8 bg-primary/10 hover:outline-none hover:bg-primary/20 text-foreground focus-visible:ring-2 focus:outline focus:ring-primary/50 border-primary focus-visible:bg-primary/5 hover:text-foreground"
          @click="searchTerm = ''"
        >
          <span class="min-w-3">{{ results.length }}</span>
          <CircleX class="size-4" />
        </button>
      </div>

      <div class="shrink-0">
        <SelectSort />
      </div>
    </div>
    <div class="overflow-y-auto pl-1 SidebarProjects overflow-x-hidden h-[calc(100dvh-13rem)]">
      <ScrollAreaRoot
        class="w-full h-full rounded overflow-hidden"
        style="--scrollbar-size: 10px"
      >
        <ScrollAreaViewport class="w-full h-full rounded">
          <div
            class="py-1 px-0.5 flex flex-col justify-start items-start relative gap-1 w-full min-h-24"
          >
            <SearchItem
              v-for="item in results"
              :key="item.id"
              :data="item"
            />
            <SearchItemChecked
              v-for="item in allItemsChecked"
              :key="item.id"
              :data="item"
            />
          </div>
          <div
            v-if="results?.length + allItemsChecked?.length === 0"
            class=" w-full h-[calc(100vh-20rem)] text-center flex items-center justify-center"
          >
            <p class="w-40 text-xs text-muted-foreground text-pretty">
              {{ t('sidebar.noResultsDescription') }}
            </p>
          </div>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar
          class="flex select-none touch-none p-0.5 bg-secondary transition-colors duration-[160ms] ease-out hover:bg-background data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="vertical"
        >
          <ScrollAreaThumb
            class="flex-1 bg-primary rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]"
          />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>
    </div>
  </div>
</template>
