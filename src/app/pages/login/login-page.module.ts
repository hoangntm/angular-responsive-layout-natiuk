import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { LoginPageRoutingModule } from './login-page.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '../../components/layout/layout.module';
import { AutofocusModule } from '../../components/autofocus/autofocus.module';

// Components
import { LoginPageComponent } from './login-page.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    AutofocusModule
  ],
  exports: [LoginPageComponent],
  providers: []
})
export class LoginPageModule {}
