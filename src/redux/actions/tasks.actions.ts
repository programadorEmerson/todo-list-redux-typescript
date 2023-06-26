import Task from '../../interfaces/tasks';

import {
  completeCurrentTask, createNewTask,
  deleteCurrentTask, updateSelectedTask
} from '../../utils/fetchSimulator';
import showNotification from '../../utils/showNotification';

import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import Actions from '../../enum/actions';

import { AppProps } from '../reducers/tasks.reducer';

export type Dispatch = ThunkDispatch<AppProps, null, AnyAction>;

export type ReducerProps = { type: string; payload: Task };

export const setFetching = () => ({
  type: Actions.FETCHING
});

export const newTask = (task: Task) => ({
  type: Actions.NEW_TASK,
  payload: task,
});

export const updateTask = (task: Task) => ({
  type: Actions.UPDATE_TASK,
  payload: task,
});

export const completeTask = (task: Task) => ({
  type: Actions.COMPLETE_TASK,
  payload: task,
});

export const deleteTask = (task: Task) => ({
  type: Actions.DELETE_TASK,
  payload: task,
});

export const selectTask = (task: Task) => ({
  type: Actions.SELECT_TASK,
  payload: task,
});

export const showDialog = () => ({
  type: Actions.SHOW_DIALOG
});

export const getTasks = () => ({
  type: Actions.GET_TASKS
});

export const createNewTaskAsync = (task: Task) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setFetching());
      const updatedTask = await createNewTask(task);
      dispatch(newTask(updatedTask));
      showNotification({ icon: 'success', text: 'Tarefa criada com sucesso' });
    } catch (error) {
      console.error('Erro ao criar nova tarefa:', error);
    }
  };
};

export const updateTaskAsync = (task: Task) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setFetching());
      const updatedTask = await updateSelectedTask(task);
      dispatch(updateTask(updatedTask));
      showNotification({ icon: 'success', text: 'Tarefa atualizada com sucesso' });
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };
};

export const removeTaskAsync = (task: Task) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setFetching());
      await deleteCurrentTask(task);
      dispatch(deleteTask(task));
      showNotification({ icon: 'success', text: 'Tarefa removida com sucesso' });
    } catch (error) {
      console.error('Erro ao remover tarefa:', error);
    }
  };
};

export const completeTaskAsync = (task: Task) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setFetching());
      const updatedTask = await completeCurrentTask(task);
      dispatch(completeTask(updatedTask));
      showNotification({ icon: 'success', text: 'Tarefa completada com sucesso' });
    } catch (error) {
      console.error('Erro ao completar tarefa:', error);
    }
  };
};
