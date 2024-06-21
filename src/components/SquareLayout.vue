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
  @include flex-center;
  background-color: $color-white-000;
  border-radius: 5px;

  &[layout-theme='navigation'] {
    background-color: $color-blue-000;
    padding: 20px;
  }

  &[layout-theme='candidate'] {
    width: 100%;
    height: 72px;
    min-height: 72px;
    padding: 0 16px;
    gap: 24px;
    background-color: rgba($color-white-200, 0.1);
    border-radius: 16px;
  }
}
</style>
