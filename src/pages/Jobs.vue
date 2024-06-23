<template>
  <BasicLayout>
    <section class="jobs">
      <SortJob v-for="item in roles" :sort="item" />
    </section>
  </BasicLayout>
</template>

<script setup lang="ts">
import BasicLayout from '@components/BasicLayout.vue';
import SortJob from '@components/SortJob.vue';
import { roles } from '@constants';
</script>

<style lang="scss" scoped>
.jobs {
  overflow-y: auto;
  height: 100%;
}
</style>
