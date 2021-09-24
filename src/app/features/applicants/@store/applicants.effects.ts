import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { Applicant } from '../domain/applicants.models';
import { ApplicantsService } from '../domain/applicants.service';
import { ApplicantsActions } from './applicants-types';

@Injectable()
export class ApplicantsEffects {

  // load all courses from firebase - start loading indicator
  // on success dispatch success action
  // on error dispatch error action and show error message
  loadApplicantsRequest$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(ApplicantsActions.loadAllApplicantsRequest),
        concatMap(() =>
          this.applicationService.loadAllApplicants()
            .pipe(
              map((applicants: Applicant[]) =>
                this.store.dispatch(ApplicantsActions.loadApplicantsSuccess({ applicants }))),
              catchError(error =>
                of(ApplicantsActions.loadApplicantsError({ error: error.message })))
            )
        )
      ), { dispatch: false }
  );

  addApplicant$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(ApplicantsActions.addApplicant),
        concatMap(action =>
          this.applicationService.addApplicant(action.applicant)
            .pipe(
              map(() => ApplicantsActions.addApplicantSuccess()),
              catchError(error =>
                of(ApplicantsActions.addApplicantError({ error: error.message })))
            )
        )
      )
  );

  deleteApplicant$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(ApplicantsActions.deleteApplicant),
        map(action => {
          this.applicationService.deleteApplicant(action.id);
          return ApplicantsActions.deleteApplicantSuccess();
        })
      )
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private applicationService: ApplicantsService
  ) {}
}
