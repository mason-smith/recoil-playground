import { TodoItem } from '../features/Todos/types';

export const replaceItemAtIndex = (
  arr: TodoItem[],
  index: number,
  newValue: TodoItem
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};
