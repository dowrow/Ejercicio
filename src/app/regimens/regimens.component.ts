import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-regimens",
  templateUrl: "./regimens.component.html"
})
export class RegimensComponent implements OnInit {
  selectedRegimen = "solo-alojamiento";

  constructor() {}

  ngOnInit() {}

  onRegimenSelected(id) {
    this.selectedRegimen = id;
  }
}
