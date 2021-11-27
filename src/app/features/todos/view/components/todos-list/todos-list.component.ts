import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TodosFacade } from '../../../@store/todos.facade';
import { Todo } from '../../../data/todo.models';
import { CreateTodoComponent } from '../create-todos/create-todo.component';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: [ './todos-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {

  todos$: Observable<Todo[]> | undefined;

  constructor(
    public readonly todosFacade: TodosFacade,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.todosFacade.loadAllTodosRequest();
    this.todos$ = this.todosFacade.todos$;
  }

  onCreateTodo(): void {
    this.dialog.open(CreateTodoComponent, {
      width: '500px'
    });
  }

  onDeleteTodo(todo: Todo): void {
    this.todosFacade.deleteTodo(todo);
  }

  onCompleted(event: { id: string; status: "open" | "completed" }): void {
    this.todosFacade.updateStatus(event.id, { status: event.status });
  }
}
