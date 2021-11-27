import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Todo } from '../data/todo.models';
import { todosActions } from './todos-types';

export interface TodosState extends EntityState<Todo> {
  loading: boolean;
}

export const todosAdapter = createEntityAdapter<Todo>();

export const initialTodosState = todosAdapter.getInitialState({
  loading: false,
});

export const todosReducer = createReducer(
  initialTodosState,

  on(todosActions.loadAllTodosRequest, (state, _): TodosState =>
    (
      {
        ...state,
        loading: true
      }
    )
  ),

  on(todosActions.loadTodosSuccess, (state, { todos }): TodosState =>
    {
      return todosAdapter.setAll(
        todos,
        {
          ...state,
          loading: false,
        }
      );
    }
  ),

  on(todosActions.loadTodosError, (state, { error }): TodosState =>
    (
      {
        ...initialTodosState,
        loading: false
      }
    )
  ),

  on(todosActions.addTodo, (state, { todo }): TodosState =>
    todosAdapter.addOne(
      todo,
      { ...state }
    )
  ),

  on(todosActions.deleteTodo, (state, { id }): TodosState =>
    todosAdapter.removeOne(
      id,
      { ...state }
    )
  )
);

export const {
               selectAll
             } = todosAdapter.getSelectors();
