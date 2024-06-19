<template>
  <div class="notice">
    <div class="notice_header">
      <div class="notice_header_total">
        <span class="count">142</span>
        <span class="label">Candidates</span>
      </div>
      <div class="notice_header_info">
        <div class="item">
          <span class="item_top">All</span>
          <span class="item_botttom">Best In</span>
        </div>
        <div class="item">
          <span class="item_top">All</span>
          <span class="item_botttom">Best In</span>
        </div>
        <div class="item">
          <span class="item_top">Default</span>
          <span class="item_botttom">Sort Results</span>
        </div>
      </div>
    </div>

    <div class="notice_body">
      <div class="notice_body_column">
        <span class="label">Name</span>
        <span class="label">Resume Score</span>
        <span class="label">Skill Match</span>
        <span class="label">Skill</span>
      </div>
      <div class="notice_body_list-box">
        <NoticeList
          v-for="item in tableData"
          :key="item.userName"
          :data="item"
        />
      </div>
    </div>
    <div class="notice_footer">
      <Pagination :totalPage="totalPage" @send-event="reset" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import NoticeList from '@components/mocules/List.vue';
import Pagination from '@components/mocules/common/Pagination.vue';

export interface List {
  userName: string;
  userRole: string;
  userResumeScore: number;
  userSkillMatch: number;
  userSkill: string;
}

const tableData = ref<Array<List>>([]);
const selectedPage = ref<number>(1);
const totalPage = ref<number>(0);
const totalCount = ref<number | undefined>();
const limit = ref<number>(10);

const reset = (pageIdx: number) => {
  if (pageIdx === 0) selectedPage.value = 1;
  else selectedPage.value = pageIdx;
};

const disassemble = (index: number, data: Array<List>, size: number) => {
  const res = new Array();
  for (let i = 0; i < data.length; i += size) {
    res.push(data.slice(i, i + size));
  }
  return res[index];
};

const getData = () => {
  tableData.value = [
    {
      userName: 'Marco',
      userRole: 'FrontEnd Developer',
      userResumeScore: 89,
      userSkillMatch: 80,
      userSkill: 'Junior'
    },
    {
      userName: 'Jeff',
      userRole: 'BackEnd Developer',
      userResumeScore: 72,
      userSkillMatch: 65,
      userSkill: 'Senior'
    },
    {
      userName: 'Eric',
      userRole: 'User Experience',
      userResumeScore: 90,
      userSkillMatch: 91,
      userSkill: 'Senior'
    },
    {
      userName: 'Merry',
      userRole: 'User Interface',
      userResumeScore: 56,
      userSkillMatch: 43,
      userSkill: 'Junior'
    },
    {
      userName: 'John',
      userRole: 'Project Manager',
      userResumeScore: 100,
      userSkillMatch: 100,
      userSkill: 'Senior'
    },
    {
      userName: 'Maxwell',
      userRole: 'FrontEnd Developer',
      userResumeScore: 50,
      userSkillMatch: 50,
      userSkill: 'Junior'
    },
    {
      userName: 'Poloe',
      userRole: 'BackEnd Developer',
      userResumeScore: 80,
      userSkillMatch: 76,
      userSkill: 'Senior'
    },
    {
      userName: 'Marco2',
      userRole: 'FrontEnd Developer',
      userResumeScore: 89,
      userSkillMatch: 80,
      userSkill: 'Junior'
    },
    {
      userName: 'Jeff2',
      userRole: 'BackEnd Developer',
      userResumeScore: 72,
      userSkillMatch: 65,
      userSkill: 'Senior'
    },
    {
      userName: 'Eric2',
      userRole: 'User Experience',
      userResumeScore: 90,
      userSkillMatch: 91,
      userSkill: 'Senior'
    },
    {
      userName: 'Merry2',
      userRole: 'User Interface',
      userResumeScore: 56,
      userSkillMatch: 43,
      userSkill: 'Junior'
    },
    {
      userName: 'John2',
      userRole: 'Project Manager',
      userResumeScore: 100,
      userSkillMatch: 100,
      userSkill: 'Senior'
    },
    {
      userName: 'Maxwell2',
      userRole: 'FrontEnd Developer',
      userResumeScore: 50,
      userSkillMatch: 50,
      userSkill: 'Junior'
    },
    {
      userName: 'Poloe2',
      userRole: 'BackEnd Developer',
      userResumeScore: 80,
      userSkillMatch: 76,
      userSkill: 'Senior'
    },
    {
      userName: 'Marco3',
      userRole: 'FrontEnd Developer',
      userResumeScore: 89,
      userSkillMatch: 80,
      userSkill: 'Junior'
    },
    {
      userName: 'Jeff3',
      userRole: 'BackEnd Developer',
      userResumeScore: 72,
      userSkillMatch: 65,
      userSkill: 'Senior'
    },
    {
      userName: 'Eric3',
      userRole: 'User Experience',
      userResumeScore: 90,
      userSkillMatch: 91,
      userSkill: 'Senior'
    },
    {
      userName: 'Merry3',
      userRole: 'User Interface',
      userResumeScore: 56,
      userSkillMatch: 43,
      userSkill: 'Junior'
    },
    {
      userName: 'John3',
      userRole: 'Project Manager',
      userResumeScore: 100,
      userSkillMatch: 100,
      userSkill: 'Senior'
    },
    {
      userName: 'Maxwell3',
      userRole: 'FrontEnd Developer',
      userResumeScore: 50,
      userSkillMatch: 50,
      userSkill: 'Junior'
    },
    {
      userName: 'Poloe3',
      userRole: 'BackEnd Developer',
      userResumeScore: 80,
      userSkillMatch: 76,
      userSkill: 'Senior'
    }
  ];
  totalCount.value = tableData.value !== undefined ? tableData.value.length : 0;
  totalPage.value =
    Math.ceil(totalCount.value / limit.value) !== 0
      ? Math.ceil(totalCount.value / limit.value)
      : 1;
  tableData.value = disassemble(
    selectedPage.value - 1,
    tableData.value,
    limit.value
  );
};

watch(selectedPage, () => {
  getData();
});

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.notice {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 36px);
  height: 100%;
  padding: 0 12px 0 24px;

  &_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 12px;
    border-bottom: 1px solid $color-white-200;

    &_total {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .count {
        font-family: 'MBC1961GulimM';
        font-size: 18px;
      }

      .label {
        color: $color-white-200;
        font-family: 'SUITE-Regular';
      }
    }

    &_info {
      display: flex;
      align-items: center;
      gap: 40px;

      .item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        &_top {
          font-family: 'MBC1961GulimM';
          color: $color-blue-000;
        }

        &_bottom {
          font-family: 'SUITE-Regular';
          color: $color-white-200;
        }
      }
    }
  }

  &_body {
    width: 100%;
    height: calc(100% - 92px);

    &_column {
      display: flex;
      align-items: center;
      width: 100%;
      height: 60px;

      .label {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 25%;
        height: 100%;
        margin-left: 16px;
        font-weight: 300;
        color: $color-white-200;
      }
    }

    &_list-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      height: calc(100% - 92px);
      gap: 12px;
      overflow-y: auto;
      scrollbar-width: none;
    }

    &_list-box::webkit-scrollbar {
      display: none;
    }
  }
}
</style>
