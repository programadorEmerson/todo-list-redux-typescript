import { AppProps } from '../pages/Home';

import Task from '../interfaces/tasks';

import TaskStatus from '../enum/taks';

const TIMEREQUEST = 1500;

export async function createNewTask(task: Task, state: AppProps): Promise<Task[]> {
  return new Promise((resolve) => {
    const { tasks } = state;
    const newTasks = [...tasks, task];
    setTimeout(() => {
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      resolve(newTasks);
    }, TIMEREQUEST);
  });

}

export async function updateSelectedTask(currentTask: Task, state: AppProps): Promise<Task[]> {
  return new Promise((resolve) => {
    const { tasks } = state;
    const newTasks = tasks.map((task) => {
      if (task.id === currentTask.id) {
        return currentTask;
      }
      return task;
    });
    setTimeout(() => {
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      resolve(newTasks);
    }, TIMEREQUEST);
  });
}

export async function deleteCurrentTask(currentTask: Task, state: AppProps): Promise<Task[]> {
  return new Promise((resolve) => {
    const { tasks } = state;
    const newTasks = tasks.filter((task) => task.id !== currentTask.id);
    setTimeout(() => {
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      resolve(newTasks);
    }, TIMEREQUEST);
  });
}

export async function completeCurrentTask(currentTask: Task, state: AppProps): Promise<Task[]> {
  return new Promise((resolve) => {
    const { tasks } = state;
    const updatedTasks = tasks.map((task) => {
      if (task.id === currentTask.id) {
        return {
          ...task,
          status: TaskStatus.COMPLETED,
          updatedAt: new Date().toISOString(),
        };
      }
      return task;
    });
    setTimeout(() => {
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      resolve(updatedTasks);
    }, TIMEREQUEST);
  });
}

export async function fecthTasks(): Promise<Task[]> {
  return new Promise((resolve) => {
    const tasks = localStorage.getItem('tasks');
    setTimeout(() => {
      if (tasks) {
        resolve(JSON.parse(tasks));
      }
      resolve([]);
    }, TIMEREQUEST);

  });
}
