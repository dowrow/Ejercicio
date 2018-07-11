import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-upgrade",
  templateUrl: "./upgrade.component.html"
})
export class UpgradeComponent implements OnInit {
  @Input() title = "";
  @Input() description = "";
  @Input() imageClass = "";
  collapsed = true;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.collapsed = !this.collapsed;
  }
}
