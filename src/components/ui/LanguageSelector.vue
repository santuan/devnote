<script setup>

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import {
  DropdownMenuRoot,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'radix-vue';
import { Languages } from 'lucide-vue-next';
import { useStorage } from '@vueuse/core';
import Tooltip from './Tooltip.vue';
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
const { locale } = useI18n();
const storedLocale = useStorage('locale', 'es');

function setLocale(lang) {
  locale.value = lang;
  storedLocale.value = lang;
}
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger
      class="flex items-center justify-center border interactive border-secondary hover:bg-secondary/80 bg-background size-8"
    >
      <Tooltip
        :name="t('settings.language')"
        :side="counter.showProjects ? 'bottom' : 'right'"
        :align="counter.showProjects ? 'center' : 'center'"
      >
        <span class="size-8 flex justify-center items-center">
          <Languages class="size-4" />
        </span>
      </Tooltip>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      :side="counter.showProjects ? 'bottom' : 'right'"
      :align="counter.showProjects ? 'start' : 'center'"
      class="z-10 grid w-32 text-xs bg-secondary"
    >
      <DropdownMenuItem
        @click="setLocale('es')"
        class="p-2 hover:bg-secondary-foreground/10 outline-none focus:ring-1 focus:ring-primary focus:bg-primary/20 focus:ring-inset"
      >
        Español
      </DropdownMenuItem>
      <DropdownMenuItem
        @click="setLocale('en')"
        class="p-2 hover:bg-secondary-foreground/10 outline-none focus:ring-1 focus:ring-primary focus:bg-primary/20 focus:ring-inset"
      >
        English
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenuRoot>
</template>
