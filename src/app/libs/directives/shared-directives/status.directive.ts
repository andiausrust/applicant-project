import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[todoStatus]'
})
export class StatusDirective {

  constructor(private readonly elRef: ElementRef, private readonly renderer: Renderer2) { }

  @Input()
  set todoStatus(value: 'open' | 'completed') {
    if ( this.elRef === null ) {
      return;
    }

    value === 'open' ?
    this.renderer.setStyle(this.elRef.nativeElement, 'background', '#F67280') :
    this.renderer.setStyle(this.elRef.nativeElement, 'background', '#128086');
  }

}
