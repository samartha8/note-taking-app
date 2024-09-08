import React, { useState } from 'react';
import NoteForm from './Components/NoteForm';
import NoteList from './Components/NoteList';
type Note = {
  title: string;
  content: string;
};

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const addNote = (title: string, content: string) => {
    setNotes([...notes, { title, content }]);
  };

  const deleteNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
    if (editingIndex === index) setEditingIndex(null);
  };

  const updateNote = (title: string, content: string) => {
    if (editingIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editingIndex] = { title, content };
      setNotes(updatedNotes);
      setEditingIndex(null);
    }
  };

  const handleEditNote = (index: number) => {
    setEditingIndex(index);
  };

  const noteBeingEdited = editingIndex !== null ? notes[editingIndex] : null;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Note Taking App</h1>

      <div className="max-w-lg mx-auto">
        <NoteForm
          onSave={editingIndex === null ? addNote : updateNote}
          initialTitle={noteBeingEdited ? noteBeingEdited.title : ''}
          initialContent={noteBeingEdited ? noteBeingEdited.content : ''}
        />

        <NoteList
          notes={notes}
          onDeleteNote={deleteNote}
          onEditNote={handleEditNote}
        />
      </div>
    </div>
  );
};

export default App;