import { createAction, props } from '@ngrx/store';
import { Todo } from '../data/todo.models';

export const loadAllTodosRequest = createAction(
  '[Todos Page] Load all todos request'
);

export const loadTodosSuccess = createAction(
  '[Firebase] Load all todos success',
  props<{ todos: Todo[] }>()
);

export const loadTodosError = createAction(
  '[Firebase] Load all todos error',
  props<{ error: String }>()
);

export const addTodo = createAction(
  '[Create todo Page] Create todo',
  props<{ todo: Todo }>()
);

export const addTodoSuccess = createAction(
  '[Firebase] Create todo Success',
);

export const addTodoError = createAction(
  '[Firebase] Create todo Error',
  props<{ error: string }>()
);

export const deleteTodo = createAction(
  '[List todos Page] Delete todo',
  props<{ id: string }>()
);

export const deleteTodoSuccess = createAction(
  '[Firebase] Delete todo Success'
);

export const updateStatus = createAction(
  '[Todo List Page] Update Status',
  props<{ todoId: string, todo: Partial<Todo> }>()
);

export const updateStatusSuccess = createAction(
  '[Firebase] Update Status Success'
);

export const updateStatusError = createAction(
  '[Firebase] Update Status Error'
);
