<template>
  <div class="nav-button" @click="moveTo(data.label)">
    <img
      :src="`/assets/icons/${data.icon}.svg`"
      alt=""
      class="nav-button_icon"
    />
    <span class="nav-button_label">{{ data.label }}</span>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';

interface Button {
  icon: string;
  label: string;
}

interface Props {
  data: Button;
}

const router = useRouter();
const props = defineProps<Props>();
const { data } = toRefs(props);

const moveTo = (loc: string) => {
  loc = loc.toLowerCase();
  if (loc === 'dashboard') loc = '';
  router.push({ path: `/${loc.toLowerCase()}` });
};
</script>

<style lang="scss" scoped>
.nav-button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  padding-left: 15px;
  gap: 16px;
  cursor: pointer;

  &_icon {
    width: 24px;
    height: 24px;
  }

  &_label {
    padding-top: 4px;
    font-size: 18px;
    font-family: 'MBC1961GulimM';
    color: $color-white-000;
  }

  &:hover {
    width: 100%;
    background-color: rgba($color-white-000, 0.1);
    border-radius: 12px;
  }
}
</style>
