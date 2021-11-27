import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { convertSnaps } from '../../../libs/utils/db-utils';
import { todosActions } from '../@store/todos-types';
import { Todo } from './todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private readonly db: AngularFirestore, private readonly store: Store) { }

  loadAllTodos(): Observable<Todo[]> {
    return <Observable<Todo[]>> this.db.collection('todos')
      .get()
      .pipe(
        map(snaps => convertSnaps<Todo>(snaps)
        )
      );
  }

  addTodo(todo: Todo): Observable<any> {
    return from(this.db.collection('todos').add(todo));
  }

  async deleteTodo(id: string): Promise<void> {
    this.db.collection('todos', ref =>
        ref.where('id', '==', id)
      )
      .snapshotChanges()
      .pipe(
        map(snaps => snaps
          .map(snap => snap.payload.doc.id
          )
        )
      ).subscribe(documentId => {
        this.db.collection('todos')
          .doc(documentId[ 0 ])
          .delete()
          .catch(error => console.log(error));
      }
    );
  }

  updateTodo(id: string, todo: Partial<Todo>): Observable<any> {
    return this.db.collection('todos', ref =>
        ref
          .where('id', '==', id)
          .limit(1)
      )
      .get()
      .pipe(
        map((query: any) => {
            query.docs[ 0 ].ref.update(todo);

          }
        )
      );
  }

  resetTodoStatus(): void {
    this.db.collection('todos', ref =>
        ref
          .where('status', '==', 'completed')
      )
      .get()
      .pipe(
        tap(query => query.docs.forEach(doc => doc.ref.update({ status: 'open' })))
      )
      .subscribe(() => this.store.dispatch(todosActions.loadAllTodosRequest()));
  }
}
