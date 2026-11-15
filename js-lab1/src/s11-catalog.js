// Section 11 — The array toolkit for UIs
import { toCardView } from "./s04-functions.js";
import { byField } from "./s05-higher-order.js";

// Courses in one department. Case-insensitive.
export function byDepartment(courses, department) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  const match = department.trim().toLowerCase();
  return courses.filter((course) => course.department.toLowerCase() === match);
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Courses that still have seats.
export function openOnly(courses) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return courses.filter((course) => course.seatsLeft > 0);
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Case-insensitive match on code OR title. A blank query returns everything.
export function searchCourses(courses, query) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  const match = query.trim().toLowerCase();
  if (!match) return courses;
  return courses.filter((course) =>
    course.code.toLowerCase().includes(match)
    || course.title.toLowerCase().includes(match),
  );
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// The course with this code (case-insensitive), or undefined.
export function findByCode(courses, code) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  const match = code.toLowerCase();
  return courses.find((course) => course.code.toLowerCase() === match);
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Sum of credits.
export function totalCredits(courses) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return courses.reduce((total, course) => total + course.credits, 0);
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// { "Computer Science": 5, "Electronics": 4, ... }
export function countByDepartment(courses) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return courses.reduce((counts, course) => {
    counts[course.department] = (counts[course.department] ?? 0) + 1;
    return counts;
  }, {});
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Unique department names, sorted A→Z.
export function departments(courses) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return [...new Set(courses.map((course) => course.department))].sort();
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// A sorted COPY. The input must not change. Reuse byField from section 05.
export function sortedBy(courses, field) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return [...courses].sort(byField(field));
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Is at least one course full?
export function anyFull(courses) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return courses.some((course) => course.seatsLeft === 0);
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Does every course have at least `n` seats?
export function allHaveSeats(courses, n = 1) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return courses.every((course) => course.seatsLeft >= n);
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// The cards a department page shows: that department, open courses only,
// sorted by code, turned into card views. One chain.
export function courseCards(courses, department) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return byDepartment(courses, department)
    .filter((course) => course.seatsLeft > 0)
    .sort(byField("code"))
    .map(toCardView);
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Planner ids → the course objects, in planner order. Unknown ids are skipped.
export function plannerCourses(planner, courses) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return planner
    .map((id) => courses.find((course) => course.id === id))
    .filter((course) => course !== undefined);
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Total credits of the planned courses.
export function plannerCredits(planner, courses) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return totalCredits(plannerCourses(planner, courses));
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Can this course be added? It must exist, have a seat, not already be in
// the planner, and keep the total within the limit (24 by default).
export function canAdd(planner, courses, courseId, limit = 24) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  const course = courses.find((item) => item.id === courseId);
  return course !== undefined
    && course.seatsLeft > 0
    && !planner.includes(courseId)
    && plannerCredits(planner, courses) + course.credits <= limit;
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}
