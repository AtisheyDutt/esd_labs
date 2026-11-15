// Section 05 — Callbacks and higher-order functions

// How many items make predicate(item) return true? Write the loop yourself.
export function countWhere(list, predicate) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  let count = 0;
  for (const item of list) {
    if (predicate(item)) count += 1;
  }
  return count;
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Returns a comparator for Array.prototype.sort that orders by one field,
// ascending. Works for strings and numbers.
export function byField(field) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return (a, b) => {
    if (a[field] < b[field]) return -1;
    if (a[field] > b[field]) return 1;
    return 0;
  };
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// A setter that accepts either a new value or a function that computes
// the new value from the current one.
export function applyUpdate(current, update) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return typeof update === "function" ? update(current) : update;
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Apply a list of updates in order, each one to the result of the last.
export function applyAll(start, updates) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return updates.reduce((current, update) => applyUpdate(current, update), start);
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}
