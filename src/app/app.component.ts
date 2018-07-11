import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  selectedTab = 0;

  onTabSelected(tab) {
    this.selectedTab = tab;
  }
}
