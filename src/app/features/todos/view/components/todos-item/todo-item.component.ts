import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../data/todo.models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: [ './todo-item.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {

  @Input() todos: Todo[] | undefined;
  @Output() deleteTodo = new EventEmitter<any>();
  @Output() completed = new EventEmitter<{ id: string, status: 'open' | 'completed' }>();

  onCompleted(todo: Todo): void {
    if ( todo.status === 'open' ) {
      this.completed.emit({ id: todo.id, status: 'completed' });
    }
  }
}
