import { Component, Input } from "@angular/core";

@Component({
  template: "<div> <p>I am comp1 loaded by {{data.parent}}<p></div>"
})
export class Comp1Component {
  @Input() data;
}
