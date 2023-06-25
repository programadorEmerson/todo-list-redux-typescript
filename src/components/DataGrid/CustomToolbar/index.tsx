import { Component } from 'react';

import { Grid } from '@mui/material';
import {
  GridToolbarColumnsButton,
  GridToolbarFilterButton
} from '@mui/x-data-grid';

import ExportToCsv from '../ExportToCsv';
import { ExportToExcel } from '../ExportToExcel';

import { CustomGridToolbarContainer } from './styles';

interface CustomToolbarProps {
  exportxlsx?: boolean;
  exportFileName?: string;
  data: Record<string, string>[];
}

class CustomToolbar extends Component<CustomToolbarProps> {
  render() {
    const {
      exportxlsx = true,
      exportFileName = document.title,
      data
    } = this.props;

    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomGridToolbarContainer>
            <GridToolbarColumnsButton
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            />
            <GridToolbarFilterButton
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            />
            {exportxlsx && (
              <ExportToExcel apiData={data} fileName={exportFileName} />
            )}
            {exportxlsx && (
              <ExportToCsv apiData={data} fileName={exportFileName} />
            )}
          </CustomGridToolbarContainer>
        </Grid>
      </Grid>
    );
  }
}

export default CustomToolbar;
