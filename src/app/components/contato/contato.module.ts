import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { FormErrorDisplayComponent } from './form-error-display/form-error-display.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormEmailComponent } from './form-email/form-email.component';
import { FormSmsComponent } from './form-sms/form-sms.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContatoComponent,
    FormErrorDisplayComponent,
    FormEmailComponent,
    FormSmsComponent,
  ],
  exports: [
    ContatoComponent,
    FormErrorDisplayComponent,
  ]
})
export class ContatoModule { }
