import React from 'react';
import Note from './Note';

type NoteListProps = {
  notes: { title: string; content: string }[];
  onDeleteNote: (index: number) => void;
  onEditNote: (index: number) => void;
};

const NoteList: React.FC<NoteListProps> = ({ notes, onDeleteNote, onEditNote }) => {
  return (
    <div className="space-y-4">
      {notes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          content={note.content}
          onDelete={() => onDeleteNote(index)}
          onEdit={() => onEditNote(index)}
        />
      ))}
    </div>
  );
};

export default NoteList;
