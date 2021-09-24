import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { convertSnaps } from '../../../libs/utils/db-utils';
import { Applicant } from './applicants.models';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {

  constructor(private db: AngularFirestore) { }

  loadAllApplicants(): Observable<Applicant[]> {
    return <Observable<Applicant[]>> this.db.collection('applications')
      .get()
      .pipe(
        map(snaps => convertSnaps<Applicant>(snaps)
        )
      );
  }

  addApplicant(applicant: any): Observable<any> {
    return from(this.db.collection('applications').add(applicant));
  }

  async deleteApplicant(id: string): Promise<void> {
    this.db.collection('applications', ref =>
        ref.where('id', '==', id)
      )
      .snapshotChanges()
      .pipe(
        map(snaps => snaps
          .map(snap => snap.payload.doc.id
          ))
      ).subscribe(documentId => {
        this.db.collection('applications')
          .doc(documentId[ 0 ])
          .delete()
          .catch(error => console.log(error));
      }
    );
  }
}
