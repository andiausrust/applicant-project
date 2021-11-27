import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Todo } from '../data/todo.models';
import { todosActions } from './todos-types';
import { selectAllTodos } from './todos.selectors';


@Injectable({
  providedIn: 'root'
})
export class TodosFacade {

  todos$ = this.store.select(selectAllTodos)
    .pipe(
      map((todos: Todo[]) => todos
        .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime())
      )
    );

  constructor(private store: Store) {}

  loadAllTodosRequest(): void {
    this.store.dispatch(todosActions.loadAllTodosRequest());
  }

  addTodo(todo: any): void {
    todo.id = Date.now();
    this.store.dispatch(todosActions.addTodo({ todo }));
  }

  deleteTodo(todo: any): void {
    this.store.dispatch(todosActions.deleteTodo({ id: todo.id }));
  }

  updateStatus(todoId: string, todo: Partial<Todo>): void {
    this.store.dispatch(todosActions.updateStatus({ todoId, todo }));
  }
}
