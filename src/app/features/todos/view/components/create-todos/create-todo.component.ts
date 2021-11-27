import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TodosFacade } from '../../../@store/todos.facade';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: [ './create-todo.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTodoComponent implements OnInit {

  todoForm: FormGroup = this.fb.group({
    description: [ '', Validators.required ],
    dueDate: [ new Date(), Validators.required ]
  });

  constructor(
    private readonly todosFacade: TodosFacade,
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<CreateTodoComponent>
  ) { }

  ngOnInit(): void {
  }

  onAddTodo(): void {
    this.todosFacade.addTodo({ ...this.todoForm.value, status: 'open' });
    this.dialogRef.close();
    this.todoForm.reset();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
