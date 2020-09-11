import { atom, RecoilState } from 'recoil';
import { TodoItem } from './types';

// @ts-ignore
export const todoListState: RecoilState<TodoItem[]> = atom({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});
