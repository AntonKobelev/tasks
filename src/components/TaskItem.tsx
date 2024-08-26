import React from 'react';
import { observer } from 'mobx-react-lite';
import taskStore from '../stores/TaskStore';
import { Task } from '../stores/TaskStore';

interface TaskItemProps {
  task: Task;
  level: number; // уровень вложенности задачи
}

const TaskItem: React.FC<TaskItemProps> = ({ task, level }) => {
  const handleSelectTask = () => {
    taskStore.setSelectedTask(task);
  };
  const handleDeleteTask = () => {
    taskStore.deleteTask(task.id);
  };
  // Логика для обработки выделения задачи и ее подзадач
  const handleToggleCheckBox = () => {
    console.log('Checkbox toggled');
  };
  return (
    <div style={{ padding: level * 20 }}>
      <input type="checkbox" onChange={handleToggleCheckBox} checked={false} />
      <span onClick={handleSelectTask}>{task.title}</span>
      <button onClick={handleDeleteTask}>Удалить</button>
      {task.subtasks && task.subtasks.length > 0 && (
        <div>
          {task.subtasks.map((subtask: Task) => (
            <TaskItem key={subtask.id} task={subtask} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default observer(TaskItem);
