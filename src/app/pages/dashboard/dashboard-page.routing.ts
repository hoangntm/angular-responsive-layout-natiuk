import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

// Components
import { DashboardPageComponent } from "./dashboard-page.component";

const routes: Routes = [{ path: "", component: DashboardPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule {}
