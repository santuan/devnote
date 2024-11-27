

<script setup lang="ts">
import DriverJsInit from '@/stores/Tour.ts';

import { Plane } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const counter = useCounterStore();
const { showSettings, content_editable } = storeToRefs(counter);

const { t } = useI18n();

const toggleTour = () => {
  localStorage.setItem('product_tour_seen', 'false');
  showSettings.value = false;
  content_editable.value = true;
  setTimeout(() => {
    DriverJsInit();
  }, 300);
};
</script>

<template>
  <div
    class="flex-row items-start justify-between flex gap-3 pt-2 py-3 pr-3"
  >
    <div
      class="space-y-0.5"
      v-auto-animate
    >
      <h3 class="text-sm font-medium text-pretty mt-0">
        Tour
      </h3>
      <p class="text-xs text-muted-foreground text-balance">
        {{ t('settings.tourDescription') }}
      </p>
    </div>
    <button
      @click="toggleTour()"
      class="flex focus:border-primary ring-foreground items-center justify-center border border-secondary bg-background shrink-0 hover:bg-secondary/80 size-8"
    >
      <Plane class="size-5" />
    </button>
  </div>
</template>