import { Component } from 'react';
import { connect } from 'react-redux';

import { Add } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';

import { Dispatch, showDialog } from '../../redux/actions/tasks.actions';

import { ItemGrid } from './styles';

class TitleSection extends Component {
  render() {
    const { dispatch } = this.props as { dispatch: Dispatch };
    return (
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <ItemGrid sx={{ padding: '1rem' }} justify="flex-start">
            <Typography variant="h6" gutterBottom>
              Lista de tarefas
            </Typography>
          </ItemGrid>
        </Grid>
        <Grid item xs={6}>
          <ItemGrid sx={{ padding: '1rem' }} justify="flex-end">
            <Button
              onClick={() => dispatch(showDialog())}
              startIcon={<Add />}
              variant="outlined"
            >
              Adicionar
            </Button>
          </ItemGrid>
        </Grid>
      </Grid>
    );
  }
}

export default connect()(TitleSection);
