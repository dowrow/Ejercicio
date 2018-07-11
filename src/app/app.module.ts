import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { RegimensComponent } from "./regimens/regimens.component";
import { ExtrasComponent } from "./extras/extras.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { RegimenComponent } from "./regimen/regimen.component";
import { ExtraComponent } from "./extra/extra.component";
import { UpgradeComponent } from "./upgrade/upgrade.component";
import { SafeHTML } from "./pipes/safe-html.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegimensComponent,
    ExtrasComponent,
    RegimenComponent,
    ExtraComponent,
    UpgradeComponent,
    SafeHTML
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
