import { Component, Input } from "@angular/core";

@Component({
  template: "<div> <p>I am comp2 loaded by {{data.parent}}<p></div>"
})
export class Comp2Component {
  @Input() data;
}
