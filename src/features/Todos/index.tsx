import React from 'react';
import { useRecoilValue } from 'recoil';

// @material-ui dependencies
import Container from '@material-ui/core/Container';

// Local Dependencies
import classes from './Todos.module.css';
import { TodoCreator } from './components/TodoCreator';
import { filteredTodoListState } from './selectors';
import { TodoItem } from './components/TodoItem';
import { TodoListFilters } from './components/TodoListFilters';
import { StatsDrawer } from './components/StatsDrawer';

export const Todos = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.input}>
        <div className={classes.metrics}>
          <TodoListFilters />
          <StatsDrawer />
        </div>
        <TodoCreator />
      </div>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </Container>
  );
};
