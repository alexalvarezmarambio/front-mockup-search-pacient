import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ModalPoliticsComponent } from '../../components/modal-politics/modal-politics.component';

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
  dialog = inject(MatDialog);
  disableSms = true;
  disableRut = true;

  validateSms() {
    this.disableSms = !this.disableSms;
  }

  validateRut() {
    this.disableRut = !this.disableRut;
  }

  modalPolitics() {
    this.dialog.open(ModalPoliticsComponent, {
      width: '30%'
    });
  }
}
