<template>
  <SquareLayout :layout-theme="'candidateReference'">
    <div class="candidate-reference">
      <div class="candidate-reference_top">
        <div class="candidate-reference_top_imgBox">
          <img src="/assets/images/user-01.png" alt="" />
        </div>
        <div class="candidate-reference_top_detail">
          <div class="candidate-reference_top_detail_name">
            {{ data.userName }}
          </div>
          <div class="candidate-reference_top_detail_badge">
            <Badge :user-skill="data.userSkill" />
          </div>
          <div class="candidate-reference_top_detail_money">
            💰{{ data.reference }}
          </div>
        </div>
      </div>

      <div class="candidate-reference_bottom">📌 {{ data.userRole }}</div>
    </div>
  </SquareLayout>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { Candidate } from '@constants';
import Badge from './Badge.vue';
import SquareLayout from './SquareLayout.vue';

interface Props {
  data: Candidate;
}

const props = defineProps<Props>();
const { data } = toRefs(props);
</script>

<style lang="scss" scoped>
.candidate-reference {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  &_top {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    &_imgBox {
      flex: 2;
      overflow: hidden;
      background-color: white;
      display: flex;
      align-items: center;

      img {
        border: 1px solid $color-gray-700;
        border-radius: 50%;
        width: 100%;
        height: auto;
        margin: auto 0;
      }
    }

    &_detail {
      flex: 3;
      overflow: hidden;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 10px;

      &_name {
        text-align: right;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'SUITE-Regular';
        font-size: 20px;
        font-weight: bold;
      }

      &_badge {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      &_money {
        padding-right: 2px;
        text-align: right;
        font-family: 'MBC1961GulimM';
        font-style: italic;
        font-size: 14px;
      }
    }
  }

  &_bottom {
    font-family: 'MBC1961GulimM';
    text-align: right;
    font-size: 13px;
  }
}
</style>
