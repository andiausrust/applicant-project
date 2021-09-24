import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApplicantsFacade } from '../@store/applicants.facade';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: [ './applicants.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicantsComponent implements OnInit {

  constructor(public applicantsFacade: ApplicantsFacade) { }

  ngOnInit(): void {
    this.applicantsFacade.loadAllApplicantsRequest();
  }

}
