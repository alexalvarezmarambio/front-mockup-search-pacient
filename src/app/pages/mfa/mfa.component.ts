import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ModalPoliticsComponent } from '../../components/modal-politics/modal-politics.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mfa',
  imports: [MatFormFieldModule, MatInput, MatButtonModule, RouterLink],
  templateUrl: './mfa.component.html',
  styleUrl: './mfa.component.scss',
})
export class MfaComponent {
  dialog = inject(MatDialog);
  disable = true;

  validate() {
    this.disable = !this.disable;
  }

  modalPolitics() {
    this.dialog.open(ModalPoliticsComponent, {
      width: '30%',
    });
  }
}
