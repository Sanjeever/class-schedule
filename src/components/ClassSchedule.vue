<template>
  <div>
    <table>
      <caption>
        <slot name="caption"></slot>
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
const props = defineProps<{
  header: string[];
  courseList: Course[];
}>();
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  margin: 20px 0;
  max-height: 50vh;
  overflow: auto;
  display: block;
}

th,
td {
  padding: 10px 30px;
  text-align: center;
}

.odd-row,
thead tr {
  background-color: #fafafc;
}

.even-row {
  background-color: #ffffff;
}
</style>
