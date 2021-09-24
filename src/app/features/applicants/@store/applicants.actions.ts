import { createAction, props } from '@ngrx/store';
import { Applicant } from '../domain/applicants.models';

export const loadAllApplicantsRequest = createAction(
  '[Applicants Page] Load all applicants request'
);

export const loadApplicantsSuccess = createAction(
  '[Firebase] Load all applicants success',
  props<{ applicants: Applicant[] }>()
);

export const loadApplicantsError = createAction(
  '[Firebase] Load all applicants error',
  props<{ error: String }>()
);

export const addApplicant = createAction(
  '[Create Applicant Page] Create Applicant',
  props<{ applicant: Applicant }>()
);

export const addApplicantSuccess = createAction(
  '[Firebase] Create Applicant Success',
);

export const addApplicantError = createAction(
  '[Firebase] Create Applicant Error',
  props<{ error: string }>()
);

export const deleteApplicant = createAction(
  '[List Applicants Page] Delete Applicant',
  props<{ id: string }>()
);

export const deleteApplicantSuccess = createAction(
  '[Firebase] Delete Applicant Success'
);
