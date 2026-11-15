// Section 06 — Scope and closures

// Each call returns a NEW generator with its own counter:
// const next = createIdGenerator("ORD"); next() → "ORD-1", next() → "ORD-2"
export function createIdGenerator(prefix) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  let count = 0;
  return () => `${prefix}-${++count}`;
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// A function factory: returns a check that "remembers" the limit.
export function makeCreditCheck(limit) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  return (credits) => credits <= limit;
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// A value only a function can change.
// Returns [get, set]. The value lives in the closure; nothing else can reach it.
export function createBox(initial) {
<<<<<<< HEAD
  throw new Error("TODO");
=======
  let value = initial;
  return [
    () => value,
    (next) => {
      value = next;
    },
  ];
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}
