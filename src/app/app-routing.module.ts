import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MainContainerComponent } from './components/layout/main-container/main-container.component';

// Guard
import { AuthGuard } from './guard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
  {
    path: 'app',
    canActivate: [AuthGuard],
    component: MainContainerComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard-page.module').then(
            m => m.DashboardPageModule
          )
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login-page.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
