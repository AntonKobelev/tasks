import { makeAutoObservable } from 'mobx';

// Тип задачи
export interface Task {
  id: number;
  title: string;
  text: string;
  subtasks?: Task[];
}

// стор для задач
const taskStore = {
  // задачи
  tasks: [] as Task[],

  // выбранная задача
  selectedTask: null as Task | null,

  // метод для выбора и установки задачи
  setSelectedTask(task: Task) {
    this.selectedTask = task;
  },

  // метод для добавления задачи
  addTask(title: string, text: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      text,
      subtasks: [],
    };
    this.tasks.push(newTask);
  },
  // метод для обновления задачи
  updateTask(id: number, updatedTitle: string, updatedText: string) {
    const task = this.findTaskById(id, this.tasks);
    if (task) {
      task.title = updatedTitle;
      task.text = updatedText;
    }
  },
  // метод для удаления задачи по id
  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },
  // метод для поиска задачи по id
  findTaskById(id: number, tasks: Task[]): Task | undefined {
    for (const task of tasks) {
      if (task.id === id) return task;
      if (task.subtasks) {
        const foundTask = this.findTaskById(id, task.subtasks);
        if (foundTask) return foundTask;
      }
    }
    return undefined;
  },
};

makeAutoObservable(taskStore);

export default taskStore;
