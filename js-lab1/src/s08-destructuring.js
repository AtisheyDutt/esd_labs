// Section 08 — Destructuring, spread, rest, computed keys

// Destructure in the parameter list. credits defaults to 3 when missing.
export function describeCourse({ code, title, credits = 3 }) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return `${code}: ${title} (${credits} cr)`;
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Return a NEW form object with one field changed. The field name is in a
// variable, so you need a computed property key.
export function updateField(form, name, value) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return { ...form, [name]: value };
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Return a NEW object without one key. Use rest in a destructuring.
export function withoutField(obj, key) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  const { [key]: removed, ...rest } = obj;
  return rest;
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Why does useState return an array and not an object? Because array
// destructuring lets the caller pick the names. Return [first, rest].
export function firstAndRest(list) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  const [first, ...rest] = list;
  return [first, rest];
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}
