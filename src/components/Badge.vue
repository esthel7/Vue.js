<template>
  <div v-if="userSkill === 'Senior'" class="badge">
    {{ userSkill }}
  </div>
  <div v-if="userSkill === 'Junior'" class="badge junior">
    {{ userSkill }}
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  userSkill: string;
}

const props = defineProps<Props>();
const { userSkill } = toRefs(props);
</script>

<style lang="scss" scoped>
.badge {
  @include flex-center;
  width: 60px;
  height: 12px;
  padding: 8px;
  color: $color-blue-100;
  background-color: rgba($color-blue-100, 0.1);
  border-radius: 12px;
}

.junior {
  color: orange;
  background-color: rgba(orange, 0.1);
}
</style>
