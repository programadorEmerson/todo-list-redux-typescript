import { Component } from 'react';

import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

import { FormikProps } from 'formik';

import { ItemGrid } from '../TitleSection/styles';

interface InputTextProps<T> {
  formik: FormikProps<T>;
  keyName: keyof T & string;
  isDisabled: boolean;
  label: string;
  xs?: number;
  sm: number;
  items: string[];
  size?: 'small' | 'medium';
}

class InputSelect<T> extends Component<InputTextProps<T>> {
  render() {
    const { xs = 12, size = 'medium', ...rest } = this.props;
    const fieldTouched = Boolean(rest.formik.touched[rest.keyName]);
    const error = rest.formik.errors[rest.keyName];
    const hasError = Boolean(error && fieldTouched);
    const props = { color: hasError ? 'red' : 'primary' };

    return (
      <Grid item xs={xs} sm={rest.sm}>
        <ItemGrid justify="center">
          <FormControl fullWidth>
            <InputLabel sx={{ ...props }} id={rest.keyName}>
              {rest.label}
            </InputLabel>
            <Select
              sx={{ textAlign: 'left' }}
              disabled={rest.isDisabled}
              labelId={rest.keyName}
              id={rest.keyName}
              name={rest.keyName}
              value={rest.formik.values[rest.keyName]}
              label={rest.label}
              onChange={rest.formik.handleChange}
              error={hasError}
              size={size}
            >
              {rest.items.map((item, index) => (
                <MenuItem key={`${index}-${item}`} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {hasError && (
              <FormHelperText error>{String(error)}</FormHelperText>
            )}
          </FormControl>
        </ItemGrid>
      </Grid>
    );
  }
}

export default InputSelect;
