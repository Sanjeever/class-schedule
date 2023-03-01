<template>
  <div>
    <table>
      <caption>
        <Transition
          enter-active-class="animate__animated animate__bounceIn"
          leave-active-class="animate__animated animate__bounceOut"
        >
          <slot name="caption"></slot>
        </Transition>
      </caption>
      <thead>
        <tr>
          <th v-for="item in header">{{ item }}</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(course, index) in courseList"
          :key="course.id"
          :class="{
            'even-row': index % 2 === 0,
            'odd-row': index % 2 !== 0,
          }"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ course.name }}</td>
          <td>{{ course.bookName }}</td>
          <td>{{ course.credit }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Transition } from "vue";
const props = defineProps<{
  header: string[];
  courseList: Course[];
}>();
</script>

<style scoped>
thead tr th {
  position: sticky;
  top: 0;
  background-color: var(--odd-row-background-color);
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  margin: 20px 0;
  max-height: 50vh;
  overflow: auto;
  overflow-x: hidden;
  display: block;
}

th,
td {
  padding: 10px 40px;
  text-align: center;
}

.odd-row,
thead tr {
  background-color: var(--odd-row-background-color);
}

.even-row {
  background-color: var(--even-row-background-color);
}
</style>
