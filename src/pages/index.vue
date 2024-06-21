<template>
  <div class="page">
    <SquareLayout>
      <div class="page_container">
        <section class="page_container_navigation">
          <Navigation />
        </section>
        <section class="page_container_candidate">
          <CandidateBox />
        </section>
      </div>
    </SquareLayout>
  </div>
</template>

<script setup lang="ts">
import SquareLayout from '@components/atoms/layout/SquareLayout.vue';
import CandidateBox from '@components/organisms/CandidateBox.vue';
import Navigation from '@components/organisms/Navigation.vue';
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: $color-black-900;

  &_container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 95vw;
    height: 95vh;

    &_navigation {
      width: 20%;
      height: 100%;
    }

    &_candidate {
      width: 80%;
      height: 100%;
    }
  }
}
</style>
