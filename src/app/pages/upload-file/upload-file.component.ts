import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-upload-file',
  imports: [
    MatIcon,
    MatTableModule,
    DatePipe,
    RouterLink,
    MatButtonModule
],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss'
})
export class UploadFileComponent {
  files: File[] = [];
  dataSource!: MatTableDataSource<File>;
  columnas = ['document', 'date', 'size', 'action'];

  uploadFile(event: Event) {
    const input = event.target as HTMLInputElement;


    if (input.files && input.files.length > 0 ) {
      this.files.push(...input.files);
      this.dataSource = new MatTableDataSource(this.files);
    }

    input.value = '';
  }

  mapSize(size: number) {
    const result = Math.round((size / 1024));
    if (result < 1000) {
      return `${result} KB`;
    } else {
      return `${Math.round(result / 1024)} MB`
    }
  }

  delete(index: number) {
    this.files.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.files);
  }

  getTotal() {
    const total = this.files.reduce((accu, value) => accu + value.size, 0);
    return this.mapSize(total);
  }
}
