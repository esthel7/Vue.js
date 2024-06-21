<template>
  <div class="basic-layout">
    <SquareLayout>
      <div class="basic-layout_container">
        <section class="basic-layout_container_navigation">
          <Navigation />
        </section>
        <section class="basic-layout_container_other">
          <slot />
        </section>
      </div>
    </SquareLayout>
  </div>
</template>

<script setup lang="ts">
import { Navigation, SquareLayout } from '@components';
</script>

<style lang="scss" scoped>
.basic-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: $color-black-900;

  &_container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 95vw;
    height: 95vh;

    &_navigation {
      width: 20%;
      height: 100%;
    }

    &_other {
      width: 80%;
      height: 100%;
    }
  }
}
</style>
