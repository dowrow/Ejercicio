import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-regimen",
  templateUrl: "./regimen.component.html"
})
export class RegimenComponent implements OnInit {
  @Input() id = "";
  @Input() model = "";
  @Input() title = "";
  @Input() features = [];
  @Output() selected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSelected() {
    this.selected.emit(this.id);
  }
}
