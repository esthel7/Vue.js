<template>
  <BasicLayout>
    <section class="reference">
      <div class="reference_sort">
        <div class="reference_sort_items" @click="open('money')">
          <div class="reference_sort_items_title">
            <div class="reference_sort_items_title_emoji">💸</div>
            <div class="reference_sort_items_title_value">{{ Money }}</div>
            <div class="reference_sort_items_title_emoji">🔻</div>
          </div>
          <div v-if="moneyRef" class="reference_sort_items_body">
            <div
              v-for="item in sortMoney"
              class="reference_sort_items_body_select green"
              @click="change('money', item)"
            >
              {{ item }}
            </div>
          </div>
        </div>

        <div class="reference_sort_items" @click="open('roles')">
          <div class="reference_sort_items_title">
            <div class="reference_sort_items_title_emoji">🧑‍💻</div>
            <div class="reference_sort_items_title_value">{{ Roles }}</div>
            <div class="reference_sort_items_title_emoji">🔻</div>
          </div>
          <div v-if="rolesRef" class="reference_sort_items_body">
            <div
              v-for="item in sortRoles"
              class="reference_sort_items_body_select"
              @click="change('roles', item)"
            >
              {{ item }}
            </div>
          </div>
        </div>

        <div class="reference_sort_items" @click="open('skill')">
          <div class="reference_sort_items_title">
            <div class="reference_sort_items_title_emoji">💪</div>
            <div class="reference_sort_items_title_value">{{ Skill }}</div>
            <div class="reference_sort_items_title_emoji">🔻</div>
          </div>
          <div v-if="skillRef" class="reference_sort_items_body">
            <div
              v-for="item in sortSkill"
              class="reference_sort_items_body_select orange"
              @click="change('skill', item)"
            >
              {{ item }}
            </div>
          </div>
        </div>

        <div
          v-if="emojiView"
          class="reference_sort_items last"
          @click="open('done')"
        >
          🔍
        </div>
        <div v-else class="reference_sort_items last" @click="open('done')">
          Search
        </div>
      </div>

      <div class="reference_candidate">
        <CandidateReference v-for="data in sortBy" :data="data" />
      </div>
    </section>
  </BasicLayout>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import BasicLayout from '@components/BasicLayout.vue';
import CandidateReference from '@components/CandidateReference.vue';
import { Candidate, candidate, roles } from '@constants';

const Money = ref('Money');
const Roles = ref('Roles');
const Skill = ref('Skill');

const moneyRef = ref(false);
const rolesRef = ref(false);
const skillRef = ref(false);
const emojiView = ref(false);

const Max = 500000;
const sortMoney = [
  'Default',
  '$ 100000',
  '$ 200000',
  '$ 300000',
  '$ 400000',
  '$ 500000'
];
const sortRoles = ['Default'].concat(roles);
const sortSkill = ['Default', 'Junior', 'Senior'];
const ChangeWidth = 500;

const sortBy = ref<Array<Candidate>>(
  candidate
    .filter(item => item.reference <= Max)
    .sort((a, b) => b.reference - a.reference)
);

const open = (flag: 'money' | 'roles' | 'skill' | 'done') => {
  if (flag === 'done') {
    sortBy.value = candidate
      .filter(item =>
        Money.value !== 'Money'
          ? item.reference <= Number(Money.value.substring(2))
          : item.reference <= Max
      )
      .filter(item =>
        Roles.value !== 'Roles' ? item.userRole === Roles.value : true
      )
      .filter(item =>
        Skill.value !== 'Skill' ? item.userSkill === Skill.value : true
      )
      .sort((a, b) => b.reference - a.reference);

    moneyRef.value = false;
    rolesRef.value = false;
    skillRef.value = false;
    return;
  }

  flag === 'money'
    ? (moneyRef.value = !moneyRef.value)
    : flag === 'roles'
      ? (rolesRef.value = !rolesRef.value)
      : (skillRef.value = !skillRef.value);
};

const change = (flag: 'money' | 'roles' | 'skill', text: string) => {
  if (text === 'Default') {
    flag === 'money'
      ? (Money.value = 'Money')
      : flag === 'roles'
        ? (Roles.value = 'Roles')
        : (Skill.value = 'Skill');
    return;
  }

  flag === 'money'
    ? (Money.value = text)
    : flag === 'roles'
      ? (Roles.value = text)
      : (Skill.value = text);
};

const checkEmoji = () => {
  emojiView.value = window.innerWidth <= ChangeWidth ? true : false;
};

onMounted(() => {
  checkEmoji();
  window.addEventListener('resize', checkEmoji);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkEmoji);
});
</script>

<style lang="scss" scoped>
.reference {
  overflow-y: auto;
  height: 100%;

  &_sort {
    width: 100%;
    padding: 10px 20px;
    background-color: $color-gray-100;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    margin-bottom: 20px;

    &_items {
      flex: 2;
      background-color: white;
      border-radius: 5px;
      padding: 5px;
      display: grid;
      align-items: center;
      cursor: pointer;
      position: relative;

      @media (max-width: 500px) {
        flex: 3;
      }

      &.last {
        flex: 1;
        font-weight: bold;
        text-align: center;
      }

      &.last:hover {
        color: $color-green-100;
      }

      &_title {
        display: flex;
        justify-content: space-between;
        gap: 5px;
        font-weight: bold;
        overflow: hidden;

        @media (max-width: 500px) {
          justify-content: center;
        }

        div {
          font-family: 'SUITE-Regular';
        }

        &_emoji {
          @media (max-width: 500px) {
            display: none;
          }
        }

        &_value {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      &_body {
        width: 100%;
        position: absolute;
        top: 32px;

        &_select {
          font-family: 'SUITE-Regular';
          background-color: $color-blue-000;
          padding: 5px 10px;
          margin-bottom: 2px;
          border-radius: 5px;
          box-shadow: 2px 2px 5px;
          width: 100%;
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;

          &.green {
            background-color: $color-green-000;
          }

          &.orange {
            background-color: $color-orange-000;
          }
        }

        :first-child {
          background-color: white;
        }
      }
    }
  }

  &_candidate {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
}
</style>
