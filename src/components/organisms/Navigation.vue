<template>
  <BasicLayout>
    <div class="navigation">
      <div class="navigation_sub-menu">
        <div class="navigation_sub-menu_button-box"></div>
      </div>
      <div class="navigation_sub-menu">
        <span class="navigation_sub-menu_title">Recruitment</span>
        <div class="navigation_sub-menu_button-box"></div>
      </div>
      <div class="navigation_sub-menu">
        <span class="navigation_sub-menu_title">Organization</span>
        <div class="navigation_sub-menu_button-box"></div>
      </div>
    </div>
  </BasicLayout>
</template>

<script setup lang="ts">
import BasicLayout from '@components/atoms/layout/BasicLayout.vue';
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 40px;

  &_sub-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    &_title {
      margin-bottom: 12px;
      font-family: 'SUITE-Regular';
      color: $color-white-000;
    }

    &_button-box {
      width: calc(100% - 24px);
    }
  }
}
</style>
