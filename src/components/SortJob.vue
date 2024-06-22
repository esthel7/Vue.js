<template>
  <section class="sort-job" v-if="sortBy">
    <div class="sort-job_title">📌{{ sort }}</div>
    <div class="sort-job_container">
      <SquareLayout v-for="data in sortBy" :layout-theme="'jobCandidate'">
        <img class="sort-job_profile" src="/assets/images/user-01.png" alt="" />
        <div class="sort-job_text-box">
          <div class="sort-job_text-box_detail name">
            {{ data.userName }}
          </div>
          <div class="sort-job_text-box_detail skill">
            <Badge :userSkill="data.userSkill" />
          </div>
        </div>
      </SquareLayout>
    </div>
  </section>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { Candidate, candidate, roles } from '@constants';
import Badge from './Badge.vue';
import SquareLayout from './SquareLayout.vue';

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

  &_profile {
    width: 100%;
  }

  &_text-box {
    display: flex;
    flex-direction: column;
    text-align: right;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 5px 10px;

    &_detail {
      display: flex;
      margin: auto 0;

      &.name {
        text-align: right;
        font-size: 20px;
        font-weight: bold;
        overflow: hidden;
        white-space: normal;
        word-wrap: break-word;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      &.skill {
        margin-left: auto;
      }
    }
  }
}
</style>
