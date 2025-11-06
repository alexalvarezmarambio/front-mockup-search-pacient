import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MfaComponent } from './pages/mfa/mfa.component';
import { UploadFileComponent } from './pages/upload-file/upload-file.component';
import { SearchPacientComponent } from './pages/search-pacient/search-pacient.component';
import { MfaSmsComponent } from './pages/mfa-sms/mfa-sms.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'mfa', component: MfaComponent },
      { path: 'mfa-sms', component: MfaSmsComponent },
      { path: 'upload-file', component: UploadFileComponent},
      { path: 'search-pacient', component: SearchPacientComponent },
      { path: '', redirectTo: 'mfa', pathMatch: 'full'}
    ]
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];
