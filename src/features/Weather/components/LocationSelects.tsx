import React, { ChangeEvent } from 'react';

// @material-ui dependencies
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

// Local Dependencies
import { states, State } from 'src/data/states';
import { LocationSelectProps } from './types';

export const LocationSelects = (props: LocationSelectProps) => {
  const { city, setCity, stateVal, setStateVal } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          autoComplete="city"
          name="city"
          variant="outlined"
          required
          fullWidth
          id="city"
          label="City"
          autoFocus
          value={city}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCity(e.target.value)
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          value={stateVal}
          // @ts-ignore
          onChange={(e: ChangeEvent<HTMLInputElement>, newValue: State) =>
            setStateVal(newValue)
          }
          id="state-select"
          options={states}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="State" variant="outlined" />
          )}
        />
      </Grid>
      <Button variant="contained" color="primary" fullWidth type="submit">
        Fetch Weather
      </Button>
    </Grid>
  );
};
