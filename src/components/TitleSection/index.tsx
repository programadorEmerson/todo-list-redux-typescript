import { Component } from 'react';

import { Add } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';

import { ItemGrid } from './styles';

type TitleSectionProps = {
  showDialog: (open: boolean) => void;
};

class TitleSection extends Component<TitleSectionProps> {
  render() {
    const { showDialog } = this.props;

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
              onClick={() => showDialog(true)}
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

export default TitleSection;
