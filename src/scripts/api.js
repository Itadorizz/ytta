const BASE_URL = "https://notes-api.dicoding.dev/v2";

export const getNotes = async () => {
  const response = await fetch(`${BASE_URL}/notes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }
  return response.json();
};

export const addNote = async (title, body) => {
  const response = await fetch(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });
  if (!response.ok) {
    throw new Error("Failed to add note");
  }
  return response.json();
};

export const deleteNote = async (id) => {
  const response = await fetch(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete note");
  }
};
