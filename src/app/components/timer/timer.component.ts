import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent implements OnInit {
  router = inject(Router);
  appSvc = inject(AppService);
  seconds = 20;
  displaySeconds = '00:20';
  idInterval: any;

  ngOnInit(): void {
    this.idInterval = setInterval(() => {
      this.seconds -= 1;
      const duration = moment.duration(this.seconds, 'seconds');
      const minutes = duration.minutes().toString().padStart(2, '0');
      const seconds = duration.seconds().toString().padStart(2, '0');
      this.displaySeconds = `${minutes}:${seconds}`;

      if (this.seconds < 0) {
        clearInterval(this.idInterval);
        this.appSvc.isValid = false;
        this.router.navigateByUrl('/main/mfa');
      }
    }, 1000);
  }
}
