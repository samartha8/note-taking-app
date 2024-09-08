import React from 'react';

type NoteProps = {
  title: string;
  content: string;
  onDelete: () => void;
  onEdit: () => void;
};

const Note: React.FC<NoteProps> = ({ title, content, onDelete, onEdit }) => {
  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex space-x-2">
        <button
          onClick={onEdit}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
