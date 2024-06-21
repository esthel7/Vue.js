<template>
  <div class="square-layout" :layout-theme="theme">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  theme?: string;
}

const props = defineProps<Props>();
const { theme } = toRefs(props);
</script>

<style lang="scss" scoped>
.square-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $color-white-000;
  border-radius: 5px;

  &[layout-theme='navigation'] {
    background-color: $color-blue-000;
    padding: 20px;
  }
}
</style>
