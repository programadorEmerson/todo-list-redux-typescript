import { Component } from 'react';

import { CheckTwoTone, Delete, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

import Task from '../../interfaces/tasks';

import returnColorRow from '../../utils/returnColorRow';

import { format } from 'date-fns';

import LoadingProgress from '../LoadingProgress';

import { CustomNoResultsOverlay } from './CustomNoResultsOverlay';
import CustomToolbar from './CustomToolbar';
import PaginationFooter from './PaginationFooter';
import { CustomDataGrid, StyledButtonContainer, TooltipCustom } from './styles';

type DataGridProps = {
  rows: Task[];
  loadingPage: boolean;
  fetching: boolean;
  taskExport: Record<string, string>[];
  completeTask: (task: Task) => void;
  removeTask: (task: Task) => void;
  selectTask: (task: Task | null) => void;
};

const itemPerPage = 8;

export class DataGrid extends Component<DataGridProps> {

  state = {
    currentPage: 0
  };

  setCurrentPage = (currentPage: number) => {
    this.setState({ currentPage });
  };

  render() {
    const { rows, taskExport, loadingPage,
      completeTask, selectTask, removeTask, fetching
    } = this.props as DataGridProps;
    const { currentPage } = this.state;

    const columns: GridColDef[] = [
      {
        field: 'actions',
        headerName: 'Ações',
        align: 'center',
        headerAlign: 'center',
        type: 'string',
        filterable: false,
        sortable: false,
        disableExport: true,
        width: 150,
        renderCell: ({ row }) => {
          return (
            <StyledButtonContainer>
              <IconButton onClick={() => selectTask(row)} >
                <TooltipCustom
                  title="Editar"
                  placement="right"
                  disableHoverListener={false}
                >
                  <Edit />
                </TooltipCustom>
              </IconButton>
              <IconButton onClick={() => completeTask(row)} >
                <TooltipCustom
                  title="Concluir"
                  placement="right"
                  disableHoverListener={false}
                >
                  <CheckTwoTone />
                </TooltipCustom>
              </IconButton>
              <IconButton onClick={() => removeTask(row)} >
                <TooltipCustom
                  title="Remover"
                  placement="right"
                  disableHoverListener={false}
                >
                  <Delete />
                </TooltipCustom>
              </IconButton>
            </StyledButtonContainer>
          );
        }
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 130,
        type: 'number',
        editable: false,
        align: 'center',
        headerAlign: 'center'
      },
      {
        field: 'title',
        headerName: 'Título',
        width: 330,
        type: 'string',
        editable: false,
        align: 'center',
        headerAlign: 'center'
      },
      {
        field: 'description',
        headerName: 'Descrição',
        width: 450,
        type: 'string',
        editable: false,
        align: 'center',
        headerAlign: 'center'
      },
      {
        field: 'date',
        headerName: 'Data a ser concluída',
        width: 170,
        type: 'number',
        editable: false,
        align: 'center',
        headerAlign: 'center',
        valueFormatter: ({ value }) => {
          const date = new Date(value as string);
          return format(new Date(date), 'dd/MM/yyyy');
        },
      },
      {
        field: 'createdAt',
        headerName: 'Data de criação',
        width: 170,
        type: 'number',
        editable: false,
        align: 'center',
        headerAlign: 'center',
        valueFormatter: ({ value }) => {
          const date = new Date(value as string);
          return format(new Date(date), 'dd/MM/yyyy HH:mm');
        },
      },
      {
        field: 'updatedAt',
        headerName: 'Data de atualização',
        width: 170,
        type: 'number',
        editable: false,
        align: 'center',
        headerAlign: 'center',
        valueFormatter: ({ value }) => {
          const date = new Date(value as string);
          return format(new Date(date), 'dd/MM/yyyy HH:mm');
        },
      },
    ];

    return (
      <CustomDataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        page={currentPage}
        rowsPerPageOptions={[8]}
        disableSelectionOnClick
        sx={{ height: 'calc(100vh - 140px)' }}
        getRowClassName={({ row }) => returnColorRow(row as Task)}
        components={{
          Toolbar: () => {
            const toolbar = new CustomToolbar({
              data: taskExport,
              exportFileName: 'Lista de tarefas'
            });
            return toolbar ? toolbar.render() : null;
          },
          Footer: () => {
            return (
              <PaginationFooter
                currentPage={currentPage}
                numberOfPages={Math.ceil(rows.length / itemPerPage)}
                setCurrentPage={this.setCurrentPage}
              />
            );
          },
          NoResultsOverlay: () => {
            if (loadingPage) {
              return <LoadingProgress />;
            }
            return (
              <CustomNoResultsOverlay label="Nenhuma tarefa localizada" />
            );
          },
          NoRowsOverlay: () => {
            if (fetching) {
              return <LoadingProgress />;
            }
            return (
              <CustomNoResultsOverlay label="Nenhuma tarefa cadastrada" />
            );
          }
        }}
      />
    );
  }
}

export default DataGrid;
