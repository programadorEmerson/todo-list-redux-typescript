import Task from '../interfaces/tasks';

import TaskStatus from '../enum/taks';

const returnColorRow = (task: Task): string => {
  return task.status === TaskStatus.OPEN ? 'yellow' : 'green';
};

export default returnColorRow;
