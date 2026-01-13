import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { Router, RouterLink } from '@angular/router';
import { ModalPoliticsComponent } from '../../components/modal-politics/modal-politics.component';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-security-question',
  imports: [MatButtonModule, MatRadioModule, RouterLink],
  templateUrl: './security-question.component.html',
  styleUrl: './security-question.component.scss',
})
export class SecurityQuestionComponent {
  appSvc = inject(AppService);
  router = inject(Router);
  dialog = inject(MatDialog);

  modalPolitics() {
    this.dialog.open(ModalPoliticsComponent, {
      width: '30%',
    });
  }

  send() {
    this.appSvc.isValid = true;
    this.router.navigateByUrl('/main/download-file');
  }
}
