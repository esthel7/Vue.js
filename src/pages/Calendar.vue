<template>
  <BasicLayout>
    <section class="calendar">
      <div class="calendar_template">
        <div class="calendar_template_month">
          <div class="calendar_template_month_click">⬅️</div>
          <div>
            <div class="calendar_template_month_value">{{ month }}</div>
            <div class="calendar_template_month_today" @click="changeToday">
              today
            </div>
          </div>
          <div class="calendar_template_month_click">➡️</div>
        </div>
        <div class="calendar_template_header">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thr</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div class="calendar_template_children">
          <div
            v-for="dateItem in dateItems"
            class="calendar_template_children_week"
          >
            <div v-for="item in dateItem">
              <div
                class="calendar_template_children_week_days"
                v-if="item !== day"
                @click="changeDay(item)"
              >
                {{ item }}
              </div>
              <div
                class="calendar_template_children_week_days pick"
                v-if="item === day"
                @click="changeDay(item)"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="calendar_person">
        <div>🧑‍💻 Candidate</div>
        <CandidateBadge v-for="data in selectedCandidate" :data="data" />
      </div>
    </section>
  </BasicLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BasicLayout from '@components/BasicLayout.vue';
import CandidateBadge from '@components/CandidateBadge.vue';
import { Candidate, candidate } from '@constants';

const year = ref<number>(new Date().getFullYear());
const month = ref<number>(new Date().getMonth() + 1);
const day = ref<number>(new Date().getDate());

const makeCalendar = (year: number, month: number) => {
  const weeks = 7;
  const daysPerWeek = 7;
  const dateItems: Array<Array<number>> = Array.from({ length: weeks }, () =>
    Array(daysPerWeek).fill('')
  );

  const totalDays = new Date(year, month, 0).getDate();
  let currentDay = 1;
  const startDay = new Date(`${year}-${month}-01`).getDay();
  for (let week = 0; week < weeks; week++) {
    for (let day = 0; day < daysPerWeek; day++) {
      if (
        (week === 0 && day >= startDay) ||
        (week !== 0 && currentDay <= totalDays)
      ) {
        dateItems[week][day] = currentDay;
        currentDay++;
      }
    }
    if (currentDay > totalDays && week < weeks - 2) {
      dateItems.pop();
      break;
    }
  }
  return dateItems;
};

const monthCandidate = (month: number) => {
  return candidate.filter(item =>
    item.possibleDate.some(date => Number(date.split('-')[1]) === month)
  );
};

const dayCandidate = (day: number) => {
  return sortMonth.value.filter(item =>
    item.possibleDate.some(date => Number(date.split('-')[2]) === day)
  );
};

const dateItems: Array<Array<number>> = makeCalendar(year.value, month.value);
const sortMonth = ref<Array<Candidate>>(monthCandidate(month.value));
const selectedCandidate = ref<Array<Candidate>>(dayCandidate(day.value));

const changeToday = () => {
  year.value = new Date().getFullYear();
  month.value = new Date().getMonth() + 1;
  day.value = new Date().getDate();

  sortMonth.value = monthCandidate(month.value);
  selectedCandidate.value = dayCandidate(day.value);
};

const changeDay = (item: number) => {
  day.value = item;
  selectedCandidate.value = dayCandidate(day.value);
};
</script>

<style lang="scss" scoped>
.calendar {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  height: 100%;

  &_template {
    flex: 2;
    background-color: $color-gray-100;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    &_month {
      width: 100%;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      font-size: 30px;
      margin-top: 20px;
      margin-bottom: 15px;

      &_click {
        cursor: pointer;
      }

      :nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
      }

      &_value {
        cursor: pointer;
        font-size: 40px;
      }

      &_today {
        cursor: pointer;
        color: white;
        font-size: 15px;
        background-color: $color-gray-700;
        padding: 0 5px;
        border-radius: 5px;
      }
    }

    &_header {
      display: flex;
      justify-content: space-around;
      width: 100%;

      span {
        width: 32px;
        display: flex;
        justify-content: center;
      }

      :first-child {
        color: red;
      }

      :last-child {
        color: blue;
      }
    }

    &_children {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px 0;
      overflow-y: auto;

      &_week {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        &_days {
          cursor: pointer;
          width: 25px;
          height: 25px;
          display: flex;
          justify-content: center;
          align-items: center;

          &.pick {
            background-color: orange;
            border: 1px solid orange;
            border-radius: 100%;
          }
        }
      }
    }
  }

  &_person {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    background-color: $color-gray-300;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow-y: auto;
  }
}
</style>
