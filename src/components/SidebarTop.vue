<script setup>

import ButtonCreateDocumentCollapse from "@/components/ui/ButtonCreateDocumentCollapse.vue";
import DialogCommandMenu from "@/components/ui/DialogCommandMenu.vue";
import DialogInfo from "@/components/ui/DialogInfo.vue";
import DialogSettings from "@/components/ui/Settings/DialogSettings.vue";
import DriverJsInit from "@/stores/Tour.ts";
import ToggleEditable from "@/components/ui/ToggleEditable.vue";
import ToggleFontSize from "@/components/ui/ToggleFontSize.vue";
import ToggleTheme from "@/components/ui/ToggleTheme.vue";
import Tooltip from "@/components/ui/Tooltip.vue";

import { onMounted } from "vue";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

import { useMagicKeys, whenever, breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { ArrowRightToLine, ArrowLeftToLine } from "lucide-vue-next";
import { useI18n } from 'vue-i18n';
import DropdownLogo from "./ui/DropdownLogo.vue";
const counter = useCounterStore();
const { focusSidebar } = storeToRefs(counter);
const keys = useMagicKeys();
const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanLg = breakpoints.greater("lg");
const { t } = useI18n();

onMounted(() => {
  if (largerThanLg.value) {
    DriverJsInit();
  }
});

const CtrlM = keys["ctrl+m"];
whenever(CtrlM, () => {
  counter.showProjects = !counter.showProjects;
});

const magicPreview = keys["ctrl+alt+p"];
whenever(magicPreview, () => {
  counter.toggleEditable()
});

</script>

<template>
  <div
    class="flex items-center justify-between my-0.5 group focus:outline-none focus:outline-primary focus:outline-offset-2"
    :class="counter.showProjects ? 'ml-1 mr-1.5' : ' flex-col px-1'"
    ref="focusSidebar"
    tabindex="-1"
  >
    <DropdownLogo/>
    <div
      class="grid "
      :class="counter.showProjects ? 'grid-cols-6 gap-0.5' : ' grid-cols-1 gap-1 mt-1'"
    >
      <DialogInfo />
      <ButtonCreateDocumentCollapse v-if="!counter.showProjects" />
      <DialogSettings />
      <ToggleTheme />
      <ToggleFontSize />
      <DialogCommandMenu />
      <ToggleEditable />
      <Tooltip
        shortcut="Ctrl M"
        :name="`${t('verb.close')} panel`"
        :align="counter.showProjects ? 'end' : 'center'"
        :side="counter.showProjects ? 'bottom' : 'right'"
      >
        <button
          v-show="counter.showProjects"
          @click="counter.showProjects = !counter.showProjects"
          class="flex items-center justify-center border interactive border-secondary bg-background hover:bg-secondary/80 size-8"
        >
          <ArrowLeftToLine
            class="size-4"
          />
          <span class="sr-only">{{ t('verb.close') }} panel</span>
        </button>
      </Tooltip>
    </div>
    <Tooltip
      v-if="!counter.showProjects"
      name="Abrir menú"
      :align="'end'"
      side="right"
      :align-offset="18"
    >
      <button
        @click="counter.showProjects = !counter.showProjects"
        class="absolute flex flex-col justify-end items-center z-10 inset-1 py-2 md:py-5 bottom-2 hover:!border-1 top-[16.5rem]"
      >
        <ArrowRightToLine class="mx-auto duration-100 opacity-25 size-4 group-hover:opacity-90" />
        <span class="sr-only">{{ t('verb.close') }} panel</span>
      </button>
    </Tooltip>
  </div>
</template>