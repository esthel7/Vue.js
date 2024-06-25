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
@keyframes FadeIn {
  0% {
    opacity: 0;
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }

  100% {
    opacity: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

.square-layout {
  @include flex-center;
  background-color: $color-white-000;
  border-radius: 5px;

  &[layout-theme='navigation'] {
    background-color: $color-blue-100;
    padding: 20px;
    overflow-x: auto;
    overflow-y: auto;
    height: 100%;

    @media (max-width: $top-nav) {
      height: 60px;
    }
  }

  &[layout-theme='candidate'] {
    width: 100%;
    height: 72px;
    min-height: 72px;
    gap: 20px;
    background-color: rgba($color-white-200, 0.1);
    border-radius: 16px;
  }

  &[layout-theme='candidateBadge'] {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: $color-gray-200;

    @media (max-width: 400px) {
      margin-left: 0;
    }
  }

  &[layout-theme='candidateReference'] {
    padding: 20px;
    border: 3px solid $color-gray-700;
    animation-name: FadeIn;
    animation-duration: 1s;
  }
}
</style>
