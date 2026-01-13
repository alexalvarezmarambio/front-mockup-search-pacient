import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppService } from '../../services/app.service';
import { TimerComponent } from '../../components/timer/timer.component';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, MatIcon, MatButtonModule, TimerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  appSvc = inject(AppService);
}
