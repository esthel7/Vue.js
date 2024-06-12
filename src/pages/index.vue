<template>
  <div class="page">
    <BasicLayout>
      <div class="page_container">
        <section class="page_container_navigation">
          <Navigation />
        </section>
        <section class="page_container_notice">
          <Notice />
        </section>
      </div>
    </BasicLayout>
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@components/atoms/layout/BasicLayout.vue';
import Navigation from '@components/organisms/Navigation.vue';
import Notice from '@components/organisms/Notice.vue';
</script>

<style lang="scss" scoped>
.page {
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
    width: 70vw;
    height: 70vh;

    &_navigation {
      width: 20%;
      height: 100%;
    }

    &_notice {
      width: 80%;
      height: 100%;
    }
  }
}
</style>
