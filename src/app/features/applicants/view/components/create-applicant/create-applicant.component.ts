import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: [ './create-applicant.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateApplicantComponent implements OnInit {

  @Output() addApplicant: EventEmitter<any> = new EventEmitter<any>();

  applicationForm: FormGroup = this.fb.group({
    name: [ '', Validators.required ],
    skills: [ '', Validators.required ]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onAddApplicant() {
    this.addApplicant.emit(this.applicationForm.value);
    this.applicationForm.reset();
  }
}
