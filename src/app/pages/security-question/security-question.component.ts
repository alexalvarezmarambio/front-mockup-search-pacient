import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-security-question',
  imports: [MatButtonModule, MatRadioModule, RouterLink],
  templateUrl: './security-question.component.html',
  styleUrl: './security-question.component.scss',
})
export class SecurityQuestionComponent {}
