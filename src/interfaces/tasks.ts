import TaskStatus from '../enum/taks';

interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export default Task;
