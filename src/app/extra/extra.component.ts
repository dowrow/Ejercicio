import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-extra",
  templateUrl: "./extra.component.html"
})
export class ExtraComponent implements OnInit {
  @Input() exclusive = true;
  @Input() optional = true;
  @Input() title = "";
  collapsed = true;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.collapsed = !this.collapsed;
  }
}
