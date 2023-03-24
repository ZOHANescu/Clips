import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  @Input() tabTitle = '';
  @Input() active = false;

  constructor() {}

  // public getTabTitle() : string {
  //   return this.tabTitle;
  // }

  // public setTabTitle(title: string) : void {
  //   this.tabTitle = title;
  // }

}
