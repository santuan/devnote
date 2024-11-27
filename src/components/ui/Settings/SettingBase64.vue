<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useSettingsStore } from '@/stores/settings';
const settings = useSettingsStore();
const { t } = useI18n();

</script>

<template>
  <div
    class="flex-row items-start justify-between flex py-3 pr-3 border-b border-secondary"
  >
    <div class="space-y-0.5">
      <h3 class="text-sm font-medium text-pretty mt-0">
        Imagenes en Base64
      </h3>
      <p class="text-xs text-muted-foreground text-balance">
        No recomendado porque tiene problemas de performance.
      </p>
    </div>
    <button
      @click="settings.toggle_media_base64()"
      class="flex focus:border-primary ring-foreground items-center justify-center border border-secondary bg-background shrink-0 hover:bg-secondary/80 size-8"
      :class="!settings.media_base64
        ? 'hover:!bg-primary bg-primary hover:text-primary-foreground text-primary-foreground'
        : 'text-muted-foreground'
        "
    >
      64
    </button>
  </div>
</template>


