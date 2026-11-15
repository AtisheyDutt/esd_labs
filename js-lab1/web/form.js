// Sections 12–13 exercise: the "Add a course" form, built by hand with the DOM.
// Run it:  npm run web   → open http://localhost:5500/web/
// Finish src/s11-catalog.js (departments) and src/s13-forms.js first.
import { courses } from "../data/courses.js";
import { departments } from "../src/s11-catalog.js";
import { isComplete, toCourse } from "../src/s13-forms.js";

// Step 1 — select the elements you need (querySelector / querySelectorAll).
const form = document.querySelector("#add-course");
<<<<<<< HEAD
// TODO: fields — every input AND the select inside the form, as a real ARRAY
// TODO: submit — the submit button
// TODO: departmentSelect, list (#course-list), count (#count), status (#status)
=======
const fields = Array.from(form.querySelectorAll("input, select"));
const submit = form.querySelector('button[type="submit"]');
const departmentSelect = form.querySelector('select[name="department"]');
const list = document.querySelector("#course-list");
const count = document.querySelector("#count");
const status = document.querySelector("#status");
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796

// A closure that hands out ids after the catalogue's last one (20).
const nextId = (() => {
  let last = 20;
  return () => ++last;
})();

// Step 2 — fill the department dropdown from the data.
// Hint: departments(courses).map((name) => new Option(name, name))
<<<<<<< HEAD
// TODO
=======
for (const name of departments(courses)) {
  departmentSelect.append(new Option(name, name));
}
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796

// Step 3 — read every field into one object: { code, title, department, credits }.
// Hint: reduce over fields with a computed key [field.name].
function readForm() {
<<<<<<< HEAD
  // TODO
=======
  return fields.reduce((values, field) => {
    values[field.name] = field.value;
    return values;
  }, {});
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}

// Step 4 — enable the button only when the form is complete.
// Listen for "input" on the FORM (every field's event bubbles up to it).
<<<<<<< HEAD
// TODO
=======
form.addEventListener("input", () => {
  submit.disabled = !isComplete(readForm());
});
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796

// Step 5 — on "submit": stop the page reload, build the course with
// toCourse(values, nextId), append renderItem(course) to the list,
// update the count and status, reset the form, disable the button again.
<<<<<<< HEAD
// TODO
=======
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const values = readForm();
  if (!isComplete(values)) return;

  const course = toCourse(values, nextId);
  list.append(renderItem(course));
  count.textContent = String(list.children.length);
  status.textContent = `Added ${course.code}.`;
  form.reset();
  submit.disabled = true;
});
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796

// Step 6 — one list item per course. Clicking the item toggles the
// "selected" class; clicking Remove removes it WITHOUT also selecting it.
function renderItem(course) {
<<<<<<< HEAD
  // TODO: create <li class="item"><span>CS610 · Compilers · 4 cr</span><button>Remove</button></li>
  // TODO: item click → toggle "selected"; remove click → remove the item (watch the bubbling!)
=======
  const item = document.createElement("li");
  item.className = "item";

  const label = document.createElement("span");
  label.textContent = `${course.code} · ${course.title} · ${course.credits} cr`;

  const remove = document.createElement("button");
  remove.type = "button";
  remove.textContent = "Remove";
  remove.addEventListener("click", (event) => {
    event.stopPropagation();
    item.remove();
    count.textContent = String(list.children.length);
  });

  item.append(label, remove);
  item.addEventListener("click", () => item.classList.toggle("selected"));
  return item;
>>>>>>> ff15c293a1c220a53d131d0bf152759f4c4fd796
}
