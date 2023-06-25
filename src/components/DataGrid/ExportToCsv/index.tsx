/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { CSVLink } from 'react-csv';

import { Reorder as ListAlt } from '@mui/icons-material';

import { CustomCSVLink } from './styles';

interface ExportData {
  apiData: any;
  fileName: string;
}

class ExportToCsv extends React.Component<ExportData> {
  render() {
    const { apiData, fileName } = this.props;

    return (
      <CustomCSVLink>
        <CSVLink data={apiData} filename={fileName} className="csv-export">
          <ListAlt
            style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}
            color="primary"
          />
          GERAR CSV
        </CSVLink>
      </CustomCSVLink>
    );
  }
}

export default ExportToCsv;
