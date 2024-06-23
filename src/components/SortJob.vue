<template>
  <section class="sort-job" v-if="sortBy">
    <div class="sort-job_title">📌{{ sort }}</div>
    <div class="sort-job_container">
      <CandidateBadge v-for="data in sortBy" :data="data" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { Candidate, candidate, roles } from '@constants';
import CandidateBadge from './CandidateBadge.vue';

interface Props {
  sort?: string;
}

const props = defineProps<Props>();
const { sort } = toRefs(props);

let sortBy: Array<Candidate> = [];
if (sort.value && roles.includes(sort.value)) {
  sortBy = candidate.filter(item => item.userRole == sort.value);
}
</script>

<style lang="scss" scoped>
.sort-job {
  &_title {
    font-family: 'SUITE-Regular';
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    width: fit-content;
    border-bottom: 2px solid $color-orange-000;
  }

  &_container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    @media (max-width: 1000px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 400px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
