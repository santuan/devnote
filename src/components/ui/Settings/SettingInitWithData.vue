<template>
  <div class="flex flex-row items-start justify-between gap-3 pt-2 py-3 pr-3 border-t border-secondary">
    <div class="space-y-0.5">
      <h3 class="text-sm font-medium text-pretty mt-0">
        {{ t('settings.initWithData') }}
      </h3>
      <p class="text-xs text-muted-foreground text-balance">
        {{ t('settings.initWithDataDescription') }}
      </p>
    </div>
    <button
      @click="settings.toggle_init_db_with_example_doc()"
      class="flex focus:border-primary ring-foreground items-center justify-center border border-secondary bg-background shrink-0 hover:bg-secondary/80 size-8"
      :class="settings.init_db_with_example_doc
        ? 'hover:!bg-primary bg-primary hover:text-primary-foreground text-primary-foreground'
        : 'text-muted-foreground'
        "
    >
      <BookOpenCheck
        v-if="settings.init_db_with_example_doc"
        class="size-5"
      />
      <BookOpen
        v-else
        class="size-5"
      />
    </button>
  </div>
</template>

<script setup>
import { BookOpen, BookOpenCheck } from 'lucide-vue-next';
import { useSettingsStore } from '@/stores/settings';
const settings = useSettingsStore();
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
