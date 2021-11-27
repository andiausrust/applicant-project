import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatusDirective } from './status.directive';


@NgModule({
  declarations: [ StatusDirective ],
  exports: [
    StatusDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedDirectivesModule {
}
