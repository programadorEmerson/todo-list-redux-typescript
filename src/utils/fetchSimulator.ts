
import Task from '../interfaces/tasks';

import TaskStatus from '../enum/taks';

const TIMEREQUEST = 1500;

export const returnTasksStorage = (): Task[] => {
  const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
  return tasks;
};

export async function createNewTask(currentTask: Task): Promise<Task> {
  return new Promise((resolve) => {
    const tasks = returnTasksStorage();
    const newTasks = [...tasks, currentTask].map((task, index) => ({ ...task, id: index }));
    setTimeout(() => {
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      resolve(newTasks[newTasks.length - 1]);
    }, TIMEREQUEST);
  });
}

export async function updateSelectedTask(currentTask: Task): Promise<Task> {
  return new Promise((resolve) => {
    const tasks = returnTasksStorage();
    const newTasks = tasks.map((task) => {
      if (task.id === currentTask.id) return currentTask;
      return task;
    });
    setTimeout(() => {
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      resolve(currentTask);
    }, TIMEREQUEST);
  });
}

export async function deleteCurrentTask(currentTask: Task): Promise<void> {
  return new Promise((resolve) => {
    const tasks = returnTasksStorage();
    const newTasks = tasks.filter((task) => task.id !== currentTask.id)
      .map((task, index) => ({ ...task, id: index }));
    setTimeout(() => {
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      resolve();
    }, TIMEREQUEST);
  });
}

export async function completeCurrentTask(currentTask: Task): Promise<Task> {
  return new Promise((resolve) => {
    const tasks = returnTasksStorage();
    let updatedTask: Task;
    const updatedTasks = tasks.map((task) => {
      if (task.id === currentTask.id) {
        updatedTask = {
          ...task,
          status: TaskStatus.COMPLETED,
          updatedAt: new Date().toISOString(),
        };
        return updatedTask;
      }
      return task;
    });
    setTimeout(() => {
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      resolve(updatedTask);
    }, TIMEREQUEST);
  });
}
