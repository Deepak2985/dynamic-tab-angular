import {
  Component,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  OnInit
} from "@angular/core";
import { ContentContainerDirective } from "./content-container.directive";
import { SkeletonComponent } from "./skeleton.component";
import { Tab } from "./tab.model";

@Component({
  selector: "app-tab-content",
  template: "<ng-template content-container></ng-template>"
})
export class TabContentComponent implements OnInit {
  @Input() tab;
  @ViewChild(ContentContainerDirective, { static: true })
  contentContainer: ContentContainerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const tab: Tab = this.tab;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      tab.component
    );
    const viewContainerRef = this.contentContainer.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as SkeletonComponent).data = tab.tabData;
  }
}
