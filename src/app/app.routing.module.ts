import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'applicants',
    pathMatch: 'full'
  },
  {
    path: 'applicants',
    loadChildren: () => import('./features/applicants/view/applicants.module').then(m => m.ApplicantsModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule {}
