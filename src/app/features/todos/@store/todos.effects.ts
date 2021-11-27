import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { Todo } from '../data/todo.models';
import { TodosService } from '../data/todos.service';
import { todosActions } from './todos-types';

@Injectable()
export class TodosEffects {

  loadTodosRequest$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(todosActions.loadAllTodosRequest),
        concatMap(() =>
          this.todosService.loadAllTodos()
            .pipe(
              map((res: Todo[]) => {
                const todos = res.map((todo: any) =>
                  (
                    { ...todo, dueDate: todo.dueDate.toDate() }
                  ));
                return todosActions.loadTodosSuccess({ todos });
              }),
              catchError(error =>
                of(todosActions.loadTodosError({ error: error.message })))
            )
        )
      )
  );

  addTodo$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(todosActions.addTodo),
        concatMap(action =>
          this.todosService.addTodo(action.todo)
            .pipe(
              map(() => todosActions.addTodoSuccess()),
              catchError(error =>
                of(todosActions.addTodoError({ error: error.message })))
            )
        )
      )
  );

  deleteTodo$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(todosActions.deleteTodo),
        map(action => {
          this.todosService.deleteTodo(action.id);
          return todosActions.deleteTodoSuccess();
        })
      )
  );

  updateTodo$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(todosActions.updateStatus),
        concatMap(action =>
          this.todosService.updateTodo(action.todoId, action.todo)
            .pipe(
              map(() => todosActions.updateStatusSuccess()),
              catchError(() => of(todosActions.updateStatusError()))
            )
        )
      )
  );

  updateStatusSuccess$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(todosActions.updateStatusSuccess),
        map(() => todosActions.loadAllTodosRequest()),
      )
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private todosService: TodosService
  ) {}
}
