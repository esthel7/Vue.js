<template>
  <SquareLayout :theme="'navigation'">
    <div class="navigation">
      <div class="navigation_sub-menu">
        <span class="navigation_sub-menu_title" @click="open('basic')"
          >Basic</span
        >
        <div class="navigation_sub-menu_button-box">
          <NavButton v-for="item in topMenu" :key="item.label" :data="item" />
        </div>
        <div
          class="navigation_sub-menu_button-box_top basic"
          :style="{
            display: BasicView ? 'block' : 'none',
            boxShadow: '2px 2px 5px'
          }"
        >
          <NavButton v-for="item in topMenu" :key="item.label" :data="item" />
        </div>
      </div>

      <div class="navigation_sub-menu">
        <span class="navigation_sub-menu_title" @click="open('recruitment')"
          >Recruitment</span
        >
        <div class="navigation_sub-menu_button-box">
          <NavButton
            v-for="item in middleMenu"
            :key="item.label"
            :data="item"
          />
        </div>
        <div
          class="navigation_sub-menu_button-box_top recruitment"
          :style="{
            display: RecruitmentView ? 'block' : 'none',
            boxShadow: '2px 2px 5px'
          }"
        >
          <NavButton
            v-for="item in middleMenu"
            :key="item.label"
            :data="item"
          />
        </div>
      </div>

      <div class="navigation_sub-menu">
        <span class="navigation_sub-menu_title" @click="open('organization')"
          >Organization</span
        >
        <div class="navigation_sub-menu_button-box">
          <NavButton
            v-for="item in bottomMenu"
            :key="item.label"
            :data="item"
          />
        </div>
        <div
          class="navigation_sub-menu_button-box_top organization"
          :style="{
            display: OrganizationView ? 'block' : 'none',
            boxShadow: '2px 2px 5px'
          }"
        >
          <NavButton
            v-for="item in bottomMenu"
            :key="item.label"
            :data="item"
          />
        </div>
      </div>
    </div>
  </SquareLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import NavButton from './NavButton.vue';
import SquareLayout from './SquareLayout.vue';

const menu = [
  {
    icon: 'Dashboard',
    label: 'Dashboard'
  },
  {
    icon: 'Index',
    label: 'Index'
  },
  {
    icon: 'Calendar',
    label: 'Calendar'
  },
  {
    icon: 'Jobs',
    label: 'Jobs'
  },
  {
    icon: 'Reference',
    label: 'Reference'
  },
  {
    icon: 'Document',
    label: 'Document'
  },
  {
    icon: 'CareerSite',
    label: 'CareerSite'
  },
  {
    icon: 'Employee',
    label: 'Employee'
  },
  {
    icon: 'Structure',
    label: 'Structure'
  },
  {
    icon: 'Settings',
    label: 'Settings'
  }
];

const topMenu = computed(() => menu.slice(0, 3));
const middleMenu = computed(() => menu.slice(3, 7));
const bottomMenu = computed(() => menu.slice(7, menu.length));
const BasicView = ref(false);
const RecruitmentView = ref(false);
const OrganizationView = ref(false);
const TopNav = 1120;

const open = (className: string) => {
  if (window.innerWidth > TopNav) return;

  if (className === 'basic') {
    BasicView.value = !BasicView.value;
    RecruitmentView.value = false;
    OrganizationView.value = false;
  } else if (className === 'recruitment') {
    RecruitmentView.value = !RecruitmentView.value;
    BasicView.value = false;
    OrganizationView.value = false;
  } else {
    OrganizationView.value = !OrganizationView.value;
    BasicView.value = false;
    RecruitmentView.value = false;
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 14px;

  @media (max-width: $top-nav) {
    flex-direction: row;
  }

  &_sub-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    @media (max-width: $top-nav) {
      align-items: center;
    }

    &_title {
      margin-bottom: 12px;
      font-family: 'SUITE-Regular';
      color: $color-white-000;

      @media (max-width: $top-nav) {
        align-items: center;
        cursor: pointer;
      }
    }

    &_button-box {
      width: 100%;

      @media (max-width: $top-nav) {
        display: none;
      }

      &_top {
        display: none;

        @media (max-width: $top-nav) {
          height: auto;
          min-width: 30%;
          position: fixed;
          background-color: $color-gray-300;
          top: calc(2.5vh + 80px);
          z-index: 100;
        }

        &.basic {
          left: calc(2.5vw + 40px);
        }

        &.organization {
          right: calc(2.5vw + 40px);
        }
      }
    }
  }
}
</style>
