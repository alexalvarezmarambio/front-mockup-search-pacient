import { UpperCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-search-pacient',
  imports: [MatButtonModule, MatTableModule, UpperCasePipe],
  templateUrl: './search-pacient.component.html',
  styleUrls: ['./search-pacient.component.scss'],
})
export class SearchPacientComponent implements OnInit {
  hospitalizations: Hospitalization[] = [
    {
      idAdmission: 123456,
      namePacient: 'Leonardo Adrián Rodríguez Iacobitti',
      nameProfesional: 'Dr. José Marcelo Salas Melinao',
      admissions: [
        {
          dateIn: '01-10-2025 00:00',
          dateOut: '05-10-2025 20:00',
          unit: 'Unidad de Cuidados Intensivos',
          floor: 3,
          room: 12,
          bed: 4,
        },
        {
          dateIn: '05-10-2025 20:00',
          dateOut: '10-10-2025 08:00',
          unit: 'Unidad de Tratamientos Intensivos',
          floor: 2,
          room: 8,
          bed: 2,
        },
        {
          dateIn: '10-10-2025 08:00',
          dateOut: '-',
          unit: 'Medicina Interna',
          floor: 1,
          room: 5,
          bed: 1,
        },
      ],
    },
    {
      idAdmission: 98764,
      namePacient: 'Isabel Elisa Parra Mora',
      nameProfesional: 'Dr. José Marcelo Salas Melinao',
      admissions: [
        {
          dateIn: '10-10-2025 08:00',
          dateOut: '-',
          unit: 'Medicina Interna',
          floor: 1,
          room: 5,
          bed: 1,
        },
      ],
    },
  ];

  columns = ['dateIn', 'dateOut', 'unit', 'floor', 'room', 'bed'];

  ngOnInit(): void {}
}

interface Hospitalization {
  namePacient: string;
  nameProfesional: string;
  idAdmission: number;
  admissions: Admission[];
}

interface Admission {
  dateIn: string;
  dateOut: string;
  unit: string;
  floor: number;
  room: number;
  bed: number;
}
