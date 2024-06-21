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
      <div v-if="data.userSkill === 'Senior'" class="item_chip">
        {{ data.userSkill }}
      </div>
      <div v-if="data.userSkill === 'Junior'" class="item_chip junior">
        {{ data.userSkill }}
      </div>
    </div>
  </SquareLayout>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import BarChart from '@components/BarChart.vue';
import SquareLayout from '@components/SquareLayout.vue';
import { Candidate } from '@constants';

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

  &_chip {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 12px;
    padding: 8px;
    color: $color-blue-000;
    background-color: rgba($color-blue-000, 0.1);
    border-radius: 12px;

    &.junior {
      color: orange;
      background-color: rgba(orange, 0.1);
    }
  }
}
</style>
