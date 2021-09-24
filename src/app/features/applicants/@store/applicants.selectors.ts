import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApplicantsState, selectAll } from './applicants.reducer';

export const selectApplicationsState = createFeatureSelector<ApplicantsState>('applicants');

export const selectAllApplicants = createSelector(
  selectApplicationsState,
  selectAll
);
