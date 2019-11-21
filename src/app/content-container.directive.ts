import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: "[content-container]"
})
export class ContentContainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
