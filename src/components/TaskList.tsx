import React from 'react';
import { observer } from 'mobx-react-lite';
import taskStore from '../stores/TaskStore';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  return (
    <div>
      {taskStore.tasks.map((task) => (
        <TaskItem key={task.id} task={task} level={0} />
      ))}
    </div>
  );
};

export default observer(TaskList);
