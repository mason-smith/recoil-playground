import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

// @material-ui dependencies
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

// Local Dependencies
import classes from './TodoItem.module.css';
import { TodoItemProps } from './types';
import { todoListState } from '../atoms';
import { replaceItemAtIndex } from 'src/util/replaceItemAtIndex';
import { removeItemAtIndex } from 'src/util/removeItemAtIndex';

export const TodoItem = (props: TodoItemProps): JSX.Element => {
  const { item } = props;
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (e: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };
  return (
    <div className={classes.item} style={{ listStyleType: 'none' }}>
      <ListItem>
        <ListItemIcon>
          <Checkbox
            onChange={toggleItemCompletion}
            edge="start"
            checked={item.isComplete}
            tabIndex={-1}
            disableRipple
            inputProps={{
              'aria-labelledby': `checkbox-list-label-${item.text}`,
            }}
          />
        </ListItemIcon>
        <TextField
          disabled={item.isComplete}
          // variant="outlined"
          margin="normal"
          id="text"
          label="Edit todo item"
          name="text"
          fullWidth
          autoComplete="text"
          value={item.text}
          onChange={(e: ChangeEvent<HTMLInputElement>) => editItemText(e)}
        />

        <ListItemSecondaryAction>
          <IconButton onClick={deleteItem} edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
};
