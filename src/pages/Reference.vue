<template>
  <BasicLayout>
    <section class="reference">
      <div class="reference_sort">select</div>
      <div class="reference_candidate">
        <CandidateReference v-for="data in sortBy" :data="data" />
      </div>
    </section>
  </BasicLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BasicLayout from '@components/BasicLayout.vue';
import CandidateReference from '@components/CandidateReference.vue';
import { Candidate, candidate } from '@constants';

const Max = 500000;
const sortData = [100000, 200000, 300000, 400000, 500000];

const sortBy = ref<Array<Candidate>>(
  candidate
    .filter(item => item.reference <= Max)
    .sort((a, b) => b.reference - a.reference)
);
</script>

<style lang="scss" scoped>
.reference {
  overflow-y: auto;
  height: 100%;

  &_sort {
    background-color: yellow;
  }

  &_candidate {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
}
</style>
