import { Component, OnInit } from "@angular/core";
import { TabService } from "./tab.service";
import { Tab } from "./tab.model";
import { Comp1Component } from "./components/comp1.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  tabs = new Array<Tab>();
  selectedTab: number;

  constructor(private tabService: TabService) {}

  ngOnInit() {
    this.tabService.tabSub.subscribe(tabs => {
      this.tabs = tabs;
      this.selectedTab = tabs.findIndex(tab => tab.active);
    });
  }

  tabChanged(event) {
    console.log("tab changed");
  }

  addNewTab() {
    this.tabService.addTab(
      new Tab(Comp1Component, "Comp1 View", { parent: "AppComponent" })
    );
  }

  removeTab(index: number): void {
    this.tabService.removeTab(index);
  }
}
