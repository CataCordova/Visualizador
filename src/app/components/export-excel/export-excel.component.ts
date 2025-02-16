import { Component, Input } from '@angular/core';
import * as XLSX from 'xlsx';
import { Subaccion } from '../../services/subaccion.service';

@Component({
  selector: 'app-export-excel',
  standalone: false,
  
  templateUrl: './export-excel.component.html',
  styleUrl: './export-excel.component.css'
})
export class ExportExcelComponent {
  @Input() filteredSubaccion: Subaccion[] = [];

  exportToExcel(): void {
    console.log('Exportar a Excel iniciado');

    // Crear una hoja de trabajo
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.filteredSubaccion);

    // Crear un libro de trabajo
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Subacciones');

    // Guardar el archivo Excel
    XLSX.writeFile(wb, 'plan_recuperaciones.xlsx');
  }
}
