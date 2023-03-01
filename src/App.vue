<script setup lang="ts">
import "animate.css";
import { reactive, ref } from "vue";
import ClassSchedule from "./components/ClassSchedule.vue";
import { useCourseList } from "./composable/useCourseList";

const { courseList, addCourse, reset } = useCourseList();

const course: Course = reactive({
  id: 0,
  name: "Java 开发实训",
  bookName: "Spring 实战（第 6 版）",
  credit: 8,
});

const initialCourse = (): Course => ({
  id: 0,
  name: "",
  bookName: "",
  credit: 0,
});

const hasError = ref(false);
const courseNameInput = ref<HTMLInputElement>();

function addCourseHandler() {
  if (
    course.name.trim() === "" ||
    course.bookName.trim() === "" ||
    course.credit === 0
  ) {
    if (hasError.value) {
      return;
    }
    hasError.value = true;
    setTimeout(() => (hasError.value = false), 1000);
    Object.assign(course, initialCourse());
  } else {
    addCourse({ ...course });
    Object.assign(course, initialCourse());
    courseNameInput.value?.focus();
  }
}

function resetHandler() {
  reset();
}
</script>

<template>
  <main>
    <div class="container">
      <ClassSchedule
        :header="['#', '课程名', '书名', '学分']"
        :course-list="courseList"
      >
        <template #caption>
          <div v-show="hasError" style="color: red">
            课程名 / 书名 / 学分 不能为空
          </div>
        </template>
      </ClassSchedule>

      <form @submit.prevent="addCourseHandler">
        <label>课程名</label>
        <input
          v-focus
          type="text"
          v-model="course.name"
          ref="courseNameInput"
        />
        <label>书名</label>
        <input type="text" v-model="course.bookName" />
        <label>学分</label>
        <input type="number" v-model="course.credit" />
        <button>添加</button>
        <button @click.prevent="resetHandler">重置</button>
      </form>
    </div>
  </main>
</template>

<style>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color);
}

label,
input,
button {
  margin: 0 5px;
}

button {
  border: none;
  border-radius: 10px;
  padding: 5px;
  background-color: var(--button-background-color);
}

button:hover {
  transform: translateY(1px);
  background-color: var(--button-hover-background-color);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>
