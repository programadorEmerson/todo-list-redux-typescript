/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from 'react';

import { ListAlt } from '@mui/icons-material';
import { Button } from '@mui/material';

import FileSaver from 'file-saver';
import { writeXLSX, utils } from 'xlsx';

interface ExportData {
  apiData: any;
  fileName: string;
}

class ExportToExcel extends Component<ExportData> {
  exportToXlsx = () => {
    const { apiData, fileName } = this.props;
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const spreadsheet = utils.json_to_sheet(apiData);
    const spreadsheetContent = {
      Sheets: { data: spreadsheet },
      SheetNames: ['data'],
    };
    const excelBuffer = writeXLSX(spreadsheetContent, {
      bookType: 'xlsx',
      type: 'array',
    });
    const newArchive = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(newArchive, fileName + fileExtension);
  };

  render() {
    return (
      <Button
        sx={{ fontSize: '0.85rem', paddingBottom: '0.5rem' }}
        onClick={() => {
          this.exportToXlsx();
        }}
      >
        <ListAlt
          style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}
          color="primary"
        />
        GERAR XLSX
      </Button>
    );
  }
}

export { ExportToExcel };
