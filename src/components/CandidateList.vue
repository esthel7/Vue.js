<template>
  <SquareLayout :layout-theme="'candidate'">
    <div class="avatar">
      <img class="avatar_image" src="/assets/images/user-01.png" alt="" />
      <div class="avatar_text-box">
        <span class="name">{{ data.userName }}</span>
        <span class="duty">{{ data.userRole }}</span>
      </div>
    </div>
    <div class="item">
      <BarChart :data="data.userResumeScore" />
    </div>
    <div class="item">
      <BarChart :data="data.userSkillMatch" />
    </div>
    <div class="item">
      <Badge :userSkill="data.userSkill" />
    </div>
  </SquareLayout>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { Candidate } from '@constants';
import Badge from './Badge.vue';
import BarChart from './BarChart.vue';
import SquareLayout from './SquareLayout.vue';

interface Props {
  data: Candidate;
}

const props = defineProps<Props>();
const { data } = toRefs(props);
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 25%;
  gap: 8px;

  &_image {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba($color-white-200, 0.3);
  }

  &_text-box {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .name {
      color: $color-black-900;
    }

    .duty {
      font-size: 14px;
      font-weight: 300;
      color: $color-white-200;
    }
  }
}

.item {
  width: 25%;
}
</style>
