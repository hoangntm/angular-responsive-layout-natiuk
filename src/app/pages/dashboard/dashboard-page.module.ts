import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Module
import { DashboardPageRoutingModule } from "./dashboard-page.routing";
import { DashboardModule } from "../../components/dashboard/dashboard.module";

// Components
import { DashboardPageComponent } from "./dashboard-page.component";

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, DashboardPageRoutingModule, DashboardModule],
  providers: []
})
export class DashboardPageModule {}
