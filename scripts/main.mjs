import { courses, showCourses } from './list.mjs';
import { displayModal } from './modal.mjs';

showCourses(courses);

const coursesList = document.querySelector("#courses");

coursesList.addEventListener("click", (event) => {
    const clickedLi = event.target.closest("li");
    if (!clickedLi) return;

    const allLis = Array.from(coursesList.querySelectorAll("li"));
    const index = allLis.indexOf(clickedLi);

    displayModal(courses[index]);
});