import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-download-file',
  imports: [MatButtonModule, MatTableModule, RouterLink],
  templateUrl: './download-file.component.html',
  styleUrl: './download-file.component.scss',
})
export class DownloadFileComponent {
  cols = ['id', 'fileName', 'date'];
  patientFiles: PatientFile[] = [
    {
      id: 1,
      fileName: 'radiografia_torax_01.pdf',
      date: '2023-10-15',
    },
    {
      id: 2,
      fileName: 'analisis_sangre_completo.docx',
      date: '2023-11-02',
    },
    {
      id: 3,
      fileName: 'electrocardiograma_reposo.png',
      date: '2023-12-20',
    },
    {
      id: 4,
      fileName: 'historial_clinico_v1.pdf',
      date: '2024-01-05',
    },
    {
      id: 5,
      fileName: 'receta_medicamentos_cronicos.pdf',
      date: '2024-01-12',
    },
  ];
}

export interface PatientFile {
  id: number;
  fileName: string;
  date: string;
}
