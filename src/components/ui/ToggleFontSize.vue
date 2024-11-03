<script setup>
import { useStorage } from "@vueuse/core";
import {
  DropdownMenuRoot,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "radix-vue";
import { AArrowUp, AArrowDown } from "lucide-vue-next";
import Tooltip from "@/components/ui/Tooltip.vue";
import { onMounted } from "vue";
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
const appFontSize = useStorage("appFontSize", "app-font-size-md");

const toggleFontSize = (size) => {
  document.body.classList.remove(appFontSize.value);
  document.body.classList.add(size);
  appFontSize.value = size;
};

onMounted(() => {
  toggleFontSize(appFontSize.value);
});
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger class="interactive">
      <Tooltip
        name="Font size"
        :side="counter.showProjects ? 'bottom' : 'right'"
      >
        <span
          class="flex items-center justify-center border hover:bg-secondary/80 border-secondary bg-background size-8"
        >
          <AArrowDown class="AArrowDown size-5" />
          <AArrowUp class="AArrowUp size-5" />
          <span class="sr-only">Font size</span>
        </span>
      </Tooltip>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      :side="counter.showProjects ? 'bottom' : 'right'"
      :align="counter.showProjects ? 'center' : 'start'"
      class="z-10 grid w-64 text-xs bg-secondary"
    >
      <DropdownMenuGroup>
        <DropdownMenuItem
          @click="toggleFontSize('app-font-size-xs')"
          class="p-2 flex justify-between w-full hover:bg-secondary-foreground/10"
          :class="appFontSize === 'app-font-size-xs' ? 'text-primary' : ''"
        >
          <span>Extra pequeño</span>
          <span
            class="opacity-50"
          >.75rem</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          @click="toggleFontSize('app-font-size-sm')"
          class="p-2 flex justify-between w-full hover:bg-secondary-foreground/10"
          :class="appFontSize === 'app-font-size-sm' ? 'text-primary' : ''"
        >
          <span>Pequeño</span>
          <span
            class="opacity-50"
          >.875rem</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          @click="toggleFontSize('app-font-size-md')"
          class="p-2 flex justify-between w-full hover:bg-secondary-foreground/10"
          :class="appFontSize === 'app-font-size-md' ? 'text-primary' : ''"
        >
          <span>Normal</span>
          <span
            class="opacity-50"
          > 1rem</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          @click="toggleFontSize('app-font-size-lg')"
          class="p-2 flex justify-between w-full hover:bg-secondary-foreground/10"
          :class="appFontSize === 'app-font-size-lg' ? 'text-primary' : ''"
        >
          <span>Grande</span>
          <span
            class="opacity-50"
          >1.125rem</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          @click="toggleFontSize('app-font-size-xl')"
          class="p-2 flex justify-between w-full hover:bg-secondary-foreground/10"
          :class="appFontSize === 'app-font-size-xl' ? 'text-primary' : ''"
        >
          <span>Extra grande</span>
          <span
            class="opacity-50"
          >1.25rem</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenuRoot>
</template>

<style scoped>

.interactive[data-state="open"] {
  @apply text-primary
}

.interactive[data-state="open"] .AArrowDown{
  @apply !flex
}

.interactive[data-state="closed"] .AArrowDown{
  @apply !hidden
}

.interactive[data-state="open"] .AArrowUp{
  @apply !hidden
}

.interactive[data-state="closed"] .AArrowUp{
  @apply !flex
}
</style>