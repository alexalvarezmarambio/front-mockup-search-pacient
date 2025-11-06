import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-search-pacient',
  imports: [
    MatButtonModule,
    MatTableModule,
    RouterLink
],
  templateUrl: './search-pacient.component.html',
  styleUrls: ['./search-pacient.component.scss']
})
export class SearchPacientComponent implements OnInit {

  hospitalizations: Hospitalization[] = [
    {
      date: '2025-11-06',
      unit: 'Unidad de Cuidados Intensivos',
      floor: 3,
      room: 12,
      bed: 4,
      pacient: 'Juan Pérez'
    },
    {
      date: '2025-11-05',
      unit: 'Pediatría',
      floor: 2,
      room: 8,
      bed: 2,
      pacient: 'María González'
    },
    {
      date: '2025-11-04',
      unit: 'Traumatología',
      floor: 1,
      room: 5,
      bed: 1,
      pacient: 'Carlos Ramírez'
    }
  ];

  dataSource!: MatTableDataSource<Hospitalization>;
  columns = ['date', 'unit', 'floor', 'room', 'bed', 'pacient'];

  ngOnInit(): void {
    const index = Math.floor(Math.random() * 3);
    this.dataSource = new MatTableDataSource([this.hospitalizations[index]]);
  }
}

interface Hospitalization {
  date: string;
  unit: string;
  floor: number;
  room: number;
  bed: number;
  pacient: string;
}
