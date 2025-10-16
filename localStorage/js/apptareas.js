const input = document.getElementById("tareaInput");
const button = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");

// Cargar tareas guardadas
window.onload = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const tarea = localStorage.key(i);
    const estado = localStorage.getItem(tarea);
    agregarTareaDOM(tarea, estado === "completada");
  }
};

function agregarTareaDOM(texto, completada = false) {
  const li = document.createElement("li");
  if (completada) li.classList.add("completada");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completada;

  const label = document.createElement("label");
  label.textContent = texto;

  checkbox.addEventListener("change", () => {
    li.classList.toggle("completada");
    const estado = checkbox.checked ? "completada" : "pendiente";
    localStorage.setItem(texto, estado);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  lista.appendChild(li);
}

button.addEventListener("click", () => {
  const tarea = input.value.trim();
  if (tarea === "") return;

  agregarTareaDOM(tarea);
  localStorage.setItem(tarea, "pendiente");

  input.value = "";
});