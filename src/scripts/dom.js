import { deleteNote } from "./api.js";

export const createNoteElement = (note, onDelete) => {
  const noteElement = document.createElement("div");
  noteElement.className = "note";
  noteElement.innerHTML = `
    <h3>${note.title}</h3>
    <p>${note.body}</p>
    <button class="delete-btn">Delete</button>
  `;

  const deleteBtn = noteElement.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", async () => {
    try {
      await deleteNote(note.id);
      onDelete(note.id);
    } catch (error) {
      alert("Failed to delete note");
    }
  });

  return noteElement;
};

export const renderNotes = (notes, container) => {
  container.innerHTML = "";
  notes.forEach((note) => {
    const noteElement = createNoteElement(note, (id) => {
      container.removeChild(noteElement);
    });
    container.appendChild(noteElement);
  });
};
