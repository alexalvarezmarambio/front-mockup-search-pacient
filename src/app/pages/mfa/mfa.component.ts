import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mfa',
  imports: [
    MatFormFieldModule,
    MatInput,
    MatButtonModule,
    RouterLink
],
  templateUrl: './mfa.component.html',
  styleUrl: './mfa.component.scss'
})
export class MfaComponent {
  disable = true;

  validate() {
    this.disable = !this.disable;
  }

}
