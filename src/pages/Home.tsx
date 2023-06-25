import { Component } from 'react';

import DataGrid from '../components/DataGrid';
import DialogData from '../components/DialogData';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import TitleSection from '../components/TitleSection';

import Task from '../interfaces/tasks';

import {
  completeCurrentTask, createNewTask,
  deleteCurrentTask, fecthTasks, updateSelectedTask
} from '../utils/fetchSimulator';
import generateCsvValues from '../utils/generateCsvValues';
import showNotification from '../utils/showNotification';

export type AppProps = {
  open: boolean;
  tasks: Task[];
  selectedTask: Task | null;
  csvItems: Record<string, string>[]
  fetching: boolean
};

class App extends Component {

  state: AppProps = {
    open: false,
    tasks: [],
    selectedTask: null,
    fetching: false,
    csvItems: []
  };

  async componentDidMount() {
    this.setState({ fetching: true });
    const tasks = await fecthTasks();
    const csvItems = tasks.map((task) => generateCsvValues(task));
    this.setState({ tasks, csvItems, fetching: false });
  }

  showDialog = (toogle: boolean) => {
    this.setState({ open: toogle });
  };

  newTask = async (task: Task) => {
    this.setState({ fetching: true });
    const tasks = await createNewTask(task, this.state);
    const csvItems = tasks.map((task) => generateCsvValues(task));
    showNotification({ icon: 'success', text: 'Tarefa criada com sucesso' });
    this.setState({ tasks, csvItems, fetching: false });
  };

  updateTask = async (task: Task) => {
    this.setState({ fetching: true });
    const tasks = await updateSelectedTask(task, this.state);
    const csvItems = generateCsvValues(tasks);
    showNotification({ icon: 'success', text: 'Tarefa atualizada com sucesso' });
    this.setState({ tasks, csvItems, fetching: false });
  };

  completeTask = async (task: Task) => {
    this.setState({ fetching: true });
    const tasks = await completeCurrentTask(task, this.state);
    const csvItems = tasks.map((task) => generateCsvValues(task));
    showNotification({ icon: 'success', text: 'Tarefa completada com sucesso' });
    this.setState({ tasks, csvItems, fetching: false });
  };

  removeTask = async (task: Task) => {
    this.setState({ fetching: true });
    const tasks = await deleteCurrentTask(task, this.state);
    const csvItems = tasks.map((task) => generateCsvValues(task));
    showNotification({ icon: 'success', text: 'Tarefa removida com sucesso' });
    this.setState({ tasks, csvItems, fetching: false });
  };

  selectTask = (task: Task | null) => {
    this.setState({ selectedTask: task }, () => {
      this.showDialog(true);
    });
  };

  render() {
    const { tasks, open, selectedTask, fetching, csvItems } = this.state;
    return (
      <Layout>
        <Loading trigger={fetching} message='Por favor aguarde...' />
        <TitleSection showDialog={this.showDialog} />
        <DataGrid
          rows={tasks}
          fetching={fetching}
          taskExport={csvItems}
          loadingPage={false}
          completeTask={this.completeTask}
          selectTask={this.selectTask}
          removeTask={this.removeTask}
        />
        <DialogData
          openDialogTask={open}
          task={selectedTask}
          fetching={fetching}
          closeDialogTask={this.showDialog}
          updateTask={this.updateTask}
          newTask={this.newTask}
        />
      </Layout>
    );
  }
}

export default App;
