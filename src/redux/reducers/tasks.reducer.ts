/* eslint-disable indent */
import Task from '../../interfaces/tasks';

import { returnTasksStorage } from '../../utils/fetchSimulator';

import Actions from '../../enum/actions';

import { ReducerProps } from '../actions/tasks.actions';

export type AppProps = {
  open: boolean;
  tasks: Task[];
  selectedTask: Task | null;
  csvItems: Record<string, string>[]
  fetching: boolean
};

const initialState: AppProps = {
  open: false,
  tasks: [],
  selectedTask: null,
  fetching: false,
  csvItems: []
};

const tasksReducer = (state = initialState, { type, payload }: ReducerProps) => {
  switch (type) {
    case Actions.NEW_TASK:
      return {
        ...state, tasks: [...state.tasks, payload],
        fetching: false, open: false, selectedTask: null
      };
    case Actions.UPDATE_TASK:
      return {
        ...state, tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return payload;
          }
          return task;
        }), fetching: false, open: false, selectedTask: null
      };
    case Actions.COMPLETE_TASK:
      return {
        ...state, tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return payload;
          }
          return task;
        }), fetching: false
      };
    case Actions.DELETE_TASK:
      return {
        ...state, tasks: state.tasks.filter((task) =>
          task.id !== payload.id), fetching: false
      };
    case Actions.SELECT_TASK:
      return { ...state, selectedTask: payload, open: true };
    case Actions.UNSELECT_TASK:
      return { ...state, selectedTask: null, open: false };
    case Actions.FETCHING:
      return { ...state, fetching: !state.fetching };
    case Actions.SHOW_DIALOG:
      return { ...state, open: !state.open };
    case Actions.GET_TASKS:
      return { ...state, tasks: returnTasksStorage() };
    default: return state;
  }
};

export default tasksReducer;
