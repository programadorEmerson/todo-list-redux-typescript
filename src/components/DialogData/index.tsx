import React, { FC, forwardRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Save } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { type TransitionProps } from '@mui/material/transitions';

import Task from '../../interfaces/tasks';

import { Dispatch, createNewTaskAsync, showDialog, updateTaskAsync } from '../../redux/actions/tasks.actions';
import { AppProps } from '../../redux/reducers/tasks.reducer';

import TaskStatus from '../../enum/taks';

import { useFormik } from 'formik';
import * as yup from 'yup';

import InputDate from '../Inputs/InputDate';
import InputSelect from '../Inputs/InputSelect';
import InputText from '../Inputs/InputText';
import { ItemGrid } from '../TitleSection/styles';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialValues: Task = {
  id: 0,
  title: '',
  description: '',
  status: Object.values(TaskStatus)[0],
  date: new Date().toISOString(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const validationSchema = yup.object<Task>({
  title: yup.string().required('Informe o título da tarefa'),
  description: yup.string().required('Informe a descrição da tarefa'),
  date: yup.string().required('Informe a data da tarefa'),
});

const DialogData: FC = () => {

  const dispatch = useDispatch() as Dispatch;
  const {
    selectedTask: task, open: openDialogTask, fetching
  } = useSelector((state: AppProps) => state);

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema,
    initialValues,
    onSubmit: async (values) => {
      if (task) {
        dispatch(updateTaskAsync(values));
      } else {
        dispatch(createNewTaskAsync(values));
      }
    }
  });

  useEffect(() => {
    if (task) {
      formik.setValues(task);
    }
  }, [task]);

  useEffect(() => {
    if (!openDialogTask) formik.resetForm();
  }, [openDialogTask]);

  return (
    <Dialog
      keepMounted
      fullWidth
      maxWidth="md"
      open={openDialogTask}
      TransitionComponent={Transition}
      onClose={() => dispatch(showDialog())}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        {task ? `Editar tarefa: ${formik.values.title}` : 'Novo tarefa'}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit} onBlur={formik.handleBlur}>
          <Grid container spacing={1}>
            <InputText formik={formik}
              keyName='title'
              label="Informe o título"
              isDisabled={fetching}
              sm={4}
            />
            <InputText formik={formik}
              keyName='description'
              label="Informe a descrição"
              isDisabled={fetching}
              sm={8}
            />
            <InputSelect
              formik={formik}
              keyName='status'
              label="Status da tarefa"
              items={Object.values(TaskStatus).map((status) => (status))}
              isDisabled={fetching}
              sm={4}
            />
            <InputDate
              formik={formik}
              keyName='date'
              label="Vencimento da tarefa"
              enableFutureDates
              isDisabled={fetching}
              sm={4}
            />
            <Grid item xs={12} sm={4}>
              <ItemGrid sx={{ height: '100%' }} justify="center">
                <Button
                  type='submit'
                  startIcon={<Save />}
                  sx={{ height: '100%' }}
                  fullWidth
                  variant="outlined">
                  Salvar dados
                </Button>
              </ItemGrid>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogData;
