import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mfa-sms',
  imports: [
      MatFormFieldModule,
      MatInput,
      MatButtonModule,
      RouterLink
  ],
  templateUrl: './mfa-sms.component.html',
  styleUrls: ['./mfa-sms.component.scss']
})
export class MfaSmsComponent {
  disableSms = true;
  disableRut = true;

  validateSms() {
    this.disableSms = !this.disableSms;
  }

  validateRut() {
    this.disableRut = !this.disableRut;
  }

}
