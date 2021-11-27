import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedDirectivesModule } from '../../../libs/directives/shared-directives/shared-directives.module';
import { MaterialModule } from '../../../material-module';
import { TodosEffects } from '../@store/todos.effects';
import { todosReducer } from '../@store/todos.reducer';
import { CreateTodoComponent } from './components/create-todos/create-todo.component';
import { TodoItemComponent } from './components/todos-item/todo-item.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';


const routes: Routes = [
  {
    path: '',
    component: TodosListComponent
  }
];

@NgModule({
  declarations: [
    TodosListComponent,
    TodoItemComponent,
    CreateTodoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ TodosEffects ]),
    StoreModule.forFeature('todos', todosReducer),
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    SharedDirectivesModule,
    MatChipsModule
  ],
  exports: [ RouterModule ]
})
export class TodosModule {
}
