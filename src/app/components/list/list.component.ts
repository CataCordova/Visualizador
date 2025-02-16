import { Component, OnInit } from '@angular/core';
import { SubaccionService } from '../../services/subaccion.service';
import { Subaccion } from '../../services/subaccion.service';

@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class SubaccionListComponent implements OnInit {

  sortDirection: { [key: string]: boolean } = {};
  filteredSubaccion: Subaccion[] = [];
  subacciones: Subaccion[] = [];

  // Paginacion
  itemsPerPage: number = 10;
  totalItems: number = 0;
  currentPage: number = 1;

  isStatusFilterOpen: boolean = false;

  constructor(private subaccionService: SubaccionService) {}

  ngOnInit(): void {
    this.subaccionService.getSubacciones().subscribe((subaccion) => {
      this.subacciones = subaccion;
      this.filteredSubaccion = subaccion;
      this.totalItems = subaccion.length;
      this.paginate(this.currentPage);
    });
  }

  paginate(page: number): void {
    this.currentPage = page;
    const start = (page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.subacciones = this.filteredSubaccion.slice(start, end);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    if (filterValue) {
      this.filteredSubaccion = this.subacciones.filter(subacciones => {
        return Object.values(subacciones).some(value =>
          value.toString().toLowerCase().includes(filterValue)
        );
      });
    } else {
      this.filteredSubaccion = this.subacciones;
    }
    this.totalItems = this.filteredSubaccion.length;
    this.paginate(1); // Reiniciar a la primera página después de aplicar el filtro
  }

  toggleStatusFilter(): void {
    this.isStatusFilterOpen = !this.isStatusFilterOpen;
  }

  filterByStatus(status: string): void {
    if (status) {
      this.filteredSubaccion = this.subacciones.filter(subaccion => subaccion.estado === status);
    } else {
      this.filteredSubaccion = this.subacciones;
    }
    this.totalItems = this.filteredSubaccion.length;
    this.paginate(1); // Reiniciar a la primera página después de aplicar el filtro
  }

  startDate: Date | null = null;
  endDate: Date | null = null;
  
  filtrarPorFechas() {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate).setHours(0, 0, 0, 0);
      const end = new Date(this.endDate).setHours(23, 59, 59, 999);
      if (start > end) {
        alert("La fecha inicial no puede ser posterior a la fecha final.");
        return;
      }
      this.filteredSubaccion = this.subacciones.filter(subaccion => {
        const subaccionDate = subaccion.inicio * 1000; // Convertir timestamp a milisegundos
        return subaccionDate >= start && subaccionDate <= end;
      });
    } else {
      this.filteredSubaccion = this.subacciones;
    }
    this.paginate(1); // Reiniciar a la primera página después de aplicar el filtro
  }
}
