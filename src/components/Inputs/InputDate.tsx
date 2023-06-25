import { Component } from 'react';

import { Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import { FormikProps } from 'formik';

import { ItemGrid } from '../TitleSection/styles';

interface InputTextProps<T> {
  formik: FormikProps<T>;
  keyName: keyof T & string;
  isDisabled: boolean;
  enableFutureDates: boolean;
  label: string;
  xs?: number;
  sm: number;
}

class InputDate<T> extends Component<InputTextProps<T>> {
  render() {
    const { xs = 12, ...rest } = this.props;
    const fieldTouched = Boolean(rest.formik.touched[rest.keyName]);
    const error = rest.formik.errors[rest.keyName];
    const hasError = Boolean(error && fieldTouched);

    return (
      <Grid item xs={xs} sm={rest.sm}>
        <ItemGrid justify="center">
          <DatePicker
            disabled={rest.isDisabled}
            className="datePicker"
            label={rest.label}
            maxDate={rest.enableFutureDates ? undefined : new Date()}
            openTo="month"
            views={['year', 'month', 'day']}
            value={rest.formik.values[rest.keyName]}
            inputFormat="DD/MM/YYYY"
            onChange={(value) => {
              try {
                rest.formik.setFieldValue(rest.keyName, value?.toISOString());
              } catch (error) {
                rest.formik.setFieldValue(rest.keyName, '');
              }
            }}
            renderInput={(props) => (
              <TextField
                {...props}
                fullWidth
                id={rest.keyName}
                name={rest.keyName}
                error={hasError}
                helperText={hasError && String(error)}
              />
            )}
          />
        </ItemGrid>
      </Grid>
    );
  }
}

export default InputDate;
