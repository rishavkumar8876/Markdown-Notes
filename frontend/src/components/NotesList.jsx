import React from "react";

function NotesList({ notes, selectNote, createNote, deleteNote, selectedNote }) {
  if (!Array.isArray(notes)) {
    return <p>Loading...</p>;
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">NOTES</h2>

        <button className="new-btn" onClick={createNote}>
          + New Note
        </button>
      </div>

     
      <div className="notes-list">
        {notes.length === 0 ? (
          <p>No notes yet</p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className={`note-item ${
                selectedNote?.id === note.id ? "active" : ""
              }`}
              onClick={() => selectNote(note)}
            >
              <div className="note-content">
                <h4>{note.title || "Untitled"}</h4>

                <p className="note-date">
                  {new Date().toLocaleDateString()}
                </p>
              </div>

              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNote(note.id);
                }}
              >
                🗑
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotesList;