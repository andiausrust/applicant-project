import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicantsActions } from './applicants-types';
import { selectAllApplicants } from './applicants.selectors';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsFacade {

  applicants$ = this.store.select(selectAllApplicants);

  constructor(private store: Store) {}

  loadAllApplicantsRequest(): void {
    this.store.dispatch(ApplicantsActions.loadAllApplicantsRequest());
  }

  addApplicant(applicant: any): void {
    console.log(applicant);
    applicant.id = Date.now();
    this.store.dispatch(ApplicantsActions.addApplicant({ applicant }));

  }

  deleteApplicant(applicant: any) {
    console.log(applicant);
    this.store.dispatch(ApplicantsActions.deleteApplicant({ id: applicant.id }));
  }
}
