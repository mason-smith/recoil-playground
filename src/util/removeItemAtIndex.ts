import { TodoItem } from 'src/features/Todos/types';

export const removeItemAtIndex = (arr: TodoItem[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
