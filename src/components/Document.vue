<script setup>
import DocumentEditor from "./DocumentEditor.vue";
import DeleteDocument from "./ui/ButtonDeleteDocument.vue";
import SplitterGroup from "./ui/SplitterGroup.vue";
</script>

<template>
  <div class="Document">
    <SplitterGroup>
      <DocumentEditor />
    </SplitterGroup>
    <DeleteDocument />
  </div>
</template>


<style scoped>
.Document {
  @apply w-full min-h-screen pl-12 md:pl-10 lg:pl-0 bg-background 
}
</style>