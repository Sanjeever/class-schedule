import { ref, watch } from "vue";
import { courseListMock } from "./mock/course-list";

function useCourseList() {
  const courseList = ref<Course[]>(courseListMock);
  const data = localStorage.getItem("courseList");
  if (data) {
    courseList.value = JSON.parse(data);
  }

  function addCourse(course: Course) {
    course.id = courseList.value.length;
    courseList.value.push(course);
  }

  function reset() {
    courseList.value = courseListMock;
    localStorage.removeItem("courseList");
  }

  watch(
    courseList,
    (newVal) => {
      localStorage.setItem("courseList", JSON.stringify(newVal));
    },
    { deep: true }
  );

  return { courseList, addCourse, reset };
}
export { useCourseList };
