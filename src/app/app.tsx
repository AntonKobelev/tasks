import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const App: React.FC = () => {
  return (
    <div className="flex p-4 space-x-4">
      <div className="w-1/3">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
