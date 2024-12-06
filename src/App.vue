<script setup>
import Home from "@/views/Home.vue";
import Toasts from "@/components/ui/Toasts.vue";
import { useStorage } from "@vueuse/core";
const cursorPointer = useStorage("cursor", true);
</script>

<template>
  <main
    class="w-full min-h-screen font-mono bg-background text-foreground "
    :class="cursorPointer ? 'cursorPointer' : 'cursorInitial'"
  >
    <Home />
  </main>
  <Toasts />
</template>
