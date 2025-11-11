import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { ModalPoliticsComponent } from '../../components/modal-politics/modal-politics.component';
import { MaskRutDirective } from '../../directives/mask-rut.directive';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateRut } from '../../utils/rut.validator';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-mfa-sms',
  imports: [
      MatFormFieldModule,
      MatInput,
      MatButtonModule,
      RouterLink,
      MaskRutDirective,
      ReactiveFormsModule,
  ],
  templateUrl: './mfa-sms.component.html',
  styleUrls: ['./mfa-sms.component.scss']
})
export class MfaSmsComponent {
  rutCtrl = new FormControl<string | undefined>(undefined, [Validators.required, validateRut]);
  codeCtrl = new FormControl<string | undefined>(undefined, Validators.required);
  dialog = inject(MatDialog);
  router = inject(Router);
  disableSms = true;
  idInterval: any;
  seconds = 0;
  reSend = false;

  validateSms() {

    if (this.codeCtrl.invalid) {
      this.codeCtrl.markAllAsTouched();
      return;
    }

    if (this.codeCtrl.value !== '123456') {
      const dialogRef = this.dialog.open(ModalComponent, {
        data: {
          title: 'Alerta',
          text: 'El código ingresado no es correcto.',
          type: 'warn',
          showCancelButton: false
        }
      });

      dialogRef.afterClosed().subscribe({
        next: (res) => {
          this.codeCtrl.setValue(undefined);
        }
      });
      return;
    }

    clearInterval(this.idInterval);
    this.router.navigateByUrl('/main/search-pacient');
  }

  validateRut() {
    this.reSend = false;

    if (this.rutCtrl.invalid) {
      this.rutCtrl.markAllAsTouched();
      return;
    }

    if (this.rutCtrl.value !== '12.345.678-5') {
      this.dialog.open(ModalComponent, {
        data: {
          title: 'Alerta',
          text: 'No está registrado como contacto de emergencia.',
          type: 'warn',
          showCancelButton: false
        }
      });
      return;
    }

    this.seconds = 30;
    this.disableSms = false;
    this.idInterval = setInterval(() => {
      this.seconds -= 1;

      if (this.seconds === 0) {
        clearInterval(this.idInterval);
        this.reSend = true;
        this.codeCtrl.setValue(undefined);
      }
    }, 1000);
  }

  modalPolitics() {
    this.dialog.open(ModalPoliticsComponent, {
      width: '30%'
    });
  }
}
