import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

// @material-ui dependencies
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Local Dependencies
import classes from './TodoListFilters.module.css';
import { todoListFilterState } from '../atoms';

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="select-filter-label">Filter:</InputLabel>
      <Select
        labelId="select-filter-label"
        id="select-filter"
        value={filter}
        // @ts-ignore
        onChange={(e: ChangeEvent<HTMLSelectElement>) => updateFilter(e)}
      >
        <MenuItem value="Show All">All</MenuItem>
        <MenuItem value="Show Completed">Completed</MenuItem>
        <MenuItem value="Show Uncompleted">Uncompleted</MenuItem>
      </Select>
    </FormControl>
  );
};
