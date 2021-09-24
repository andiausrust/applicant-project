import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Applicant } from '../domain/applicants.models';
import { ApplicantsActions } from './applicants-types';

export interface ApplicantsState extends EntityState<Applicant> {
  loading: boolean;
}

export const applicantsAdapter = createEntityAdapter<Applicant>();

export const initialApplicantsState = applicantsAdapter.getInitialState({
  loading: false,
});

export const applicantsReducer = createReducer(
  initialApplicantsState,

  on(ApplicantsActions.loadAllApplicantsRequest, (state, _): ApplicantsState =>
    (
      {
        ...state,
        loading: true
      }
    )
  ),

  on(ApplicantsActions.loadApplicantsSuccess, (state, { applicants }): ApplicantsState =>
    applicantsAdapter.addMany(
      applicants,
      {
        ...state,
        loading: false,
      }
    )
  ),

  on(ApplicantsActions.loadApplicantsError, (state, { error }): ApplicantsState =>
    (
      {
        ...initialApplicantsState,
        loading: false
      }
    )
  ),

  on(ApplicantsActions.addApplicant, (state, { applicant }): ApplicantsState =>
    applicantsAdapter.addOne(
      applicant,
      { ...state }
    )
  ),

  on(ApplicantsActions.deleteApplicant, (state, { id }): ApplicantsState =>
    applicantsAdapter.removeOne(
      id,
      { ...state }
    )
  )
);

export const {
               selectAll
             } = applicantsAdapter.getSelectors();
