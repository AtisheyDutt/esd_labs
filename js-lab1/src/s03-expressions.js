// Section 03 — Values, truthiness and expressions

// "Full", "1 seat left", or "12 seats left".
export function seatLabel(course) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  if (course.seatsLeft === 0) return "Full";
  if (course.seatsLeft === 1) return "1 seat left";
  return `${course.seatsLeft} seats left`;
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// The course's description, or "No description yet." ONLY when it is
// null or undefined. An empty string "" is a real value and is kept.
export function descriptionOrDefault(course) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return course.description ?? "No description yet.";
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// "3 in planner" for a positive count, and null (not 0, not "") for zero.
export function plannerBadge(count) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return count > 0 ? `${count} in planner` : null;
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}
