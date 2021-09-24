import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../../../material-module';
import { ApplicantsEffects } from '../@store/applicants.effects';
import { applicantsReducer } from '../@store/applicants.reducer';
import { ApplicantsComponent } from './applicants.component';
import { ApplicantsListComponent } from './components/applicants-list/applicants-list.component';
import { CreateApplicantComponent } from './components/create-applicant/create-applicant.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicantsComponent
  }
];

@NgModule({
  declarations: [
    ApplicantsComponent,
    ApplicantsListComponent,
    CreateApplicantComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ ApplicantsEffects ]),
    StoreModule.forFeature('applicants', applicantsReducer)
  ],
  exports: [ RouterModule ]
})
export class ApplicantsModule {}
