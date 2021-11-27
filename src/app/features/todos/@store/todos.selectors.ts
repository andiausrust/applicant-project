import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll, TodosState } from './todos.reducer';

export const selectTodosState = createFeatureSelector<TodosState>('todos');

export const selectAllTodos = createSelector(
  selectTodosState,
  selectAll
);
