import React, { useEffect, useState } from "react";
import axios from "axios";
import NotesList from "./components/NotesList";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "./App.css";

const API = import.meta.env.VITE_API_URL;

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [saving, setSaving] = useState(false);

  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

 
  const fetchNotes = async () => {
    try {
      const res = await axios.get(`${API}/notes`);
      setNotes(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error(error);
      setNotes([]);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

 
  const handleSelectNote = (note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };


  const createNote = async () => {
    const res = await axios.post(`${API}/notes`, {
      title: "New Note",
      content: "",
    });

    setNotes((prev) => [...prev, res.data]);

    setSelectedNote(res.data);
    setTitle(res.data.title);
    setContent(res.data.content);
  };

  
  const updateNote = async (id) => {
    try {
      setSaving(true);

      await axios.put(`${API}/notes/${id}`, {
        title,
        content,
      });

     
      setSelectedNote((prev) => ({
        ...prev,
        title,
        content,
      }));

      setNotes((prev) =>
        prev.map((n) =>
          n.id === id ? { ...n, title, content } : n
        )
      );

      setSaving(false);
    } catch (error) {
      console.error(error);
      setSaving(false);
    }
  };


  useEffect(() => {
    if (selectedNote) {
      const timer = setTimeout(() => {
        updateNote(selectedNote.id);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [title, content]);

 
  const deleteNote = async (id) => {
    await axios.delete(`${API}/notes/${id}`);

    setNotes((prev) => prev.filter((n) => n.id !== id));

    if (selectedNote?.id === id) {
      setSelectedNote(null);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="app">
      <NotesList
        notes={notes}
        selectNote={handleSelectNote}
        createNote={createNote}
        deleteNote={deleteNote}
        selectedNote={selectedNote}
      />

      <div className="main">
        {selectedNote ? (
          <>
            
            <div className="save-indicator">
              {saving ? "SAVING..." : "SAVED"}
            </div>

            {/* Editor + Preview */}
            <div className="editor-container">
              <Editor
                title={title}
                content={content}
                setTitle={setTitle}
                setContent={setContent}
              />

              <Preview
                title={title} 
                content={content} 
              />
            </div>
          </>
        ) : (
          <p className="empty">Select or create a note</p>
        )}
      </div>
    </div>
  );
}

export default App;