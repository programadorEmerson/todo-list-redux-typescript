import { Component } from 'react';

import { Grid, InputAdornment, TextField } from '@mui/material';

import { FormikProps } from 'formik';

import { ItemGrid } from '../TitleSection/styles';

interface InputTextProps<T> {
  formik: FormikProps<T>;
  keyName: keyof T & string;
  isDisabled: boolean;
  multiline?: boolean;
  lines?: number;
  label: string;
  xs?: number;
  sm: number;
  readOnly?: boolean;
  adornment?: {
    element: JSX.Element;
  };
}

class InputText<T> extends Component<InputTextProps<T>> {
  render() {
    const {
      xs = 12,
      adornment = null,
      readOnly = false,
      ...rest
    } = this.props;
    const fieldTouched = rest.formik.touched[rest.keyName];
    const error = rest.formik.errors[rest.keyName];
    const hasError = Boolean(error && fieldTouched);

    return (
      <Grid item xs={xs} sm={rest.sm}>
        <ItemGrid justify="center">
          <TextField
            fullWidth
            rows={rest.lines}
            label={rest.label}
            variant="outlined"
            disabled={rest.isDisabled}
            multiline={rest.multiline}
            id={rest.keyName}
            name={rest.keyName}
            value={rest.formik.values[rest.keyName]}
            onChange={rest.formik.handleChange}
            error={hasError}
            helperText={hasError && String(error)}
            InputProps={{
              readOnly,
              endAdornment: (
                <InputAdornment position="end">
                  {adornment && <>{adornment.element}</>}
                </InputAdornment>
              ),
            }}
          />
        </ItemGrid>
      </Grid>
    );
  }
}

export default InputText;
