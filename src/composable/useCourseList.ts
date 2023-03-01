import { useStorage } from "@vueuse/core";
import { courseListMock } from "./mock/course-list";

function useCourseList() {
  const courseListState = useStorage("courseList", courseListMock);

  function addCourse(course: Course) {
    course.id = courseListState.value.length;
    courseListState.value.push(course);
  }

  function reset() {
    courseListState.value = courseListMock;
    localStorage.removeItem("courseList");
  }

  return { courseList: courseListState, addCourse, reset };
}
export { useCourseList };
