import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegimensComponent } from "./regimens/regimens.component";
import { ExtrasComponent } from "./extras/extras.component";

const routes: Routes = [
  { path: "", redirectTo: "/regimens", pathMatch: "full" },
  { path: "regimens", component: RegimensComponent },
  { path: "extras", component: ExtrasComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
