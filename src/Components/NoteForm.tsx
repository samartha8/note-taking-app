import React, { useState } from 'react';

type NoteFormProps = {
  onSave: (title: string, content: string) => void;
  initialTitle?: string;
  initialContent?: string;
};

const NoteForm: React.FC<NoteFormProps> = ({ onSave, initialTitle = '', initialContent = '' }) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation check for empty title or content
    if (title.trim() === '' || content.trim() === '') {
      alert('Title and Content cannot be empty!');
      return;
    }

    onSave(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white shadow rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
      >
        {initialTitle ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default NoteForm;
