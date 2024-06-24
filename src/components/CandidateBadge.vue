<template>
  <div class="candidate-badge" :class="loc">
    <SquareLayout :layout-theme="'candidateBadge'">
      <img
        class="candidate-badge_profile"
        src="/assets/images/user-01.png"
        alt=""
      />
      <div class="candidate-badge_text-box">
        <div class="candidate-badge_text-box_detail name">
          {{ data.userName }}
        </div>
        <div class="candidate-badge_text-box_detail skill">
          <Badge :userSkill="data.userSkill" />
        </div>
      </div>
    </SquareLayout>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { Candidate } from '@constants';
import Badge from './Badge.vue';
import SquareLayout from './SquareLayout.vue';

interface Props {
  data: Candidate;
  loc?: 'calendar' | 'jobs';
}

const props = defineProps<Props>();
const { data, loc } = toRefs(props);
</script>

<style lang="scss" scoped>
@keyframes LeftToRight {
  0% {
    transform: translate(-100%, 0);
  }

  80% {
    transform: translate(15px, 0);
  }

  100% {
    transform: translate(0);
  }
}

@keyframes Zoom {
  0% {
    transform: scale(80%);
  }

  50% {
    transform: scale(105%);
  }

  100% {
    transform: scale(100%);
  }
}

.candidate-badge {
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
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      &.skill {
        margin-left: auto;
      }
    }
  }
}

.calendar {
  animation-name: LeftToRight;
  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;
}

.jobs {
  animation-name: Zoom;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}
</style>
