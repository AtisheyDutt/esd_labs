// Section 10 — Immutable updates (the planner)
// A planner is an array of course ids, e.g. [4, 10, 18].
// Every function returns a NEW value and never changes its input.

// Add an id. If it is already there, return the SAME array (nothing changed).
export function addToPlanner(planner, courseId) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  if (planner.includes(courseId)) return planner;
  return [...planner, courseId];
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Remove an id. If it is not there, return the SAME array.
export function removeFromPlanner(planner, courseId) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  const index = planner.indexOf(courseId);
  if (index === -1) return planner;
  return [...planner.slice(0, index), ...planner.slice(index + 1)];
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Return a new course object with some fields changed.
export function updateCourse(course, changes) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return { ...course, ...changes };
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Return a new list where the matching course has one fewer seat.
// Untouched courses must be the SAME objects as before.
// If the course is full or not found, return the SAME list.
export function takeSeat(courses, courseId) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  const index = courses.findIndex((course) => course.id === courseId);
  if (index === -1 || courses[index].seatsLeft === 0) return courses;

  return courses.map((course, courseIndex) =>
    courseIndex === index
      ? { ...course, seatsLeft: course.seatsLeft - 1 }
      : course,
  );
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}
