import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Applicant } from '../../../domain/applicants.models';

@Component({
  selector: 'app-applicants-list',
  templateUrl: './applicants-list.component.html',
  styleUrls: [ './applicants-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicantsListComponent implements OnInit {

  @Input() allApplicants: Applicant[] | undefined;
  @Output() deleteApplicant = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
