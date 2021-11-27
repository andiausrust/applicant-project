import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { todosActions } from './features/todos/@store/todos-types';
import { TodosService } from './features/todos/data/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  constructor(private todosService: TodosService) {}

  // todo remove - only for debugging
  onResetTodos() {
    this.todosService.resetTodoStatus();
  }
}
