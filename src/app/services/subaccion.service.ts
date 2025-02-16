import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Interfaz para subaccion
export interface Subaccion {
  vertical: string;
  accion: string;
  subaccion: string;
  producto: string;
  apoyo_canal: string;
  requiere_cuantificacion: string;
  area: string;
  responsable: string;
  inicio: number;
  termino: number;
  estado: 'pending' | 'approved'| 'rejected';
  [key: string]: any; // Firma de índice para permitir acceso dinámico
}

@Injectable({
  providedIn: 'root'
})

export class SubaccionService {

  constructor() { }

  private subacciones: Subaccion[] = [
    {
      vertical: "Marketing",
      accion: "Campaña de redes sociales",
      subaccion: "Publicación en Instagram",
      producto: "Nuevo producto A",
      apoyo_canal: "Publicidad pagada",
      requiere_cuantificacion: "Sí",
      area: "Digital",
      responsable: "Juan Pérez",
      inicio: 1672531200, // Timestamp para 1 de enero de 2023
      termino: 1675209600, // Timestamp para 1 de febrero de 2023
      estado: "pending"
    },
    {
      vertical: "Ventas",
      accion: "Promoción de temporada",
      subaccion: "Descuento en tienda",
      producto: "Producto B",
      apoyo_canal: "Correo electrónico",
      requiere_cuantificacion: "No",
      area: "Retail",
      responsable: "María López",
      inicio: 1677628800, // Timestamp para 1 de marzo de 2023
      termino: 1680307200, // Timestamp para 1 de abril de 2023
      estado: "approved"
    },
    {
      vertical: "Operaciones",
      accion: "Optimización de procesos",
      subaccion: "Implementación de software",
      producto: "Software C",
      apoyo_canal: "Capacitación",
      requiere_cuantificacion: "Sí",
      area: "IT",
      responsable: "Carlos García",
      inicio: 1682985600, // Timestamp para 1 de mayo de 2023
      termino: 1685577600, // Timestamp para 1 de junio de 2023
      estado: "rejected"
    }
  ];

  getSubacciones(): Observable<Subaccion[]> {
    return of(this.subacciones);
  }
  
  addSubaccion(subaccion: Subaccion): Observable<Subaccion> {
    this.subacciones.push(subaccion);
    return of(subaccion);
  }
}
