import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink } from '@angular/router';
import { ModalPoliticsComponent } from '../../components/modal-politics/modal-politics.component';

@Component({
  selector: 'app-security-question',
  imports: [MatButtonModule, MatRadioModule, RouterLink],
  templateUrl: './security-question.component.html',
  styleUrl: './security-question.component.scss',
})
export class SecurityQuestionComponent {
  dialog = inject(MatDialog);

  modalPolitics() {
    this.dialog.open(ModalPoliticsComponent, {
      width: '30%',
    });
  }
}
