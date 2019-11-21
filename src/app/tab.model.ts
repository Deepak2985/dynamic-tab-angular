import { Type } from '@angular/core';

export class Tab {
  public id: number;
  public title: string;
  public tabData: any;
  public active: boolean;
  public component: Type<any>;

  constructor(component: Type<any>, title: string, tabData: any) {
    this.tabData = tabData;
    this.component = component;
    this.title = title;
  }
}
