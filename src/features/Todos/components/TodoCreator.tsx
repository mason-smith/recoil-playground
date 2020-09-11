import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import cuid from 'cuid';

// @material-ui dependencies
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Local Dependencies
import classes from './TodoCreator.module.css';
import { todoListState } from '../atoms';

export const TodoCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: cuid(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addItem();
      }}
      className={classes.form}
    >
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="text"
        label="Create a todo"
        name="text"
        autoComplete="text"
        autoFocus
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};
