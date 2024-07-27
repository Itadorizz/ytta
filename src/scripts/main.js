import "../styles/style.css";
import { getNotes, addNote } from "./api.js";
import { renderNotes } from "./dom.js";
import { showLoading, hideLoading } from "./utils.js";

const noteForm = document.getElementById("note-form");
const notesContainer = document.getElementById("notes-container");

const loadNotes = async () => {
  try {
    showLoading();
    const notes = await getNotes();
    renderNotes(notes, notesContainer);
  } catch (error) {
    alert("Failed to load notes");
  } finally {
    hideLoading();
  }
};

noteForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  if (!title || !body) {
    alert("Title and body are required");
    return;
  }

  try {
    showLoading();
    await addNote(title, body);
    noteForm.reset();
    await loadNotes();
  } catch (error) {
    alert("Failed to add note");
  } finally {
    hideLoading();
  }
});

loadNotes();
