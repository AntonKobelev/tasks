import React, { useState } from 'react';
import taskStore from '../stores/TaskStore';

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleAddTask = () => {
    if (title && text) {
      taskStore.addTask(title, text);
      setTitle('');
      setText('');
    }
  };

  return (
    <div className="mb-4">
      <input
        placeholder="Заголовок задачи"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <textarea
        placeholder="Текст задачи"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={handleAddTask}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Добавить задачу
      </button>
    </div>
  );
};

export default TaskForm;
