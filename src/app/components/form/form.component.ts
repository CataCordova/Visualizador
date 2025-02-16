import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SubaccionService } from '../../services/subaccion.service';
import { Subaccion } from '../../services/subaccion.service';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  vertical: string = '';
  accion: string = '';
  isModalOpen: boolean = false;
  subacciones: Subaccion[] = [];

  constructor(private subaccionService: SubaccionService, private location:Location) {}

  addSubaccion() {
    this.subacciones.push({
      vertical: this.vertical,
      accion: this.accion,
      subaccion: '',
      producto: '',
      apoyo_canal: '',
      requiere_cuantificacion: '',
      area: '',
      responsable: '',
      inicio: 0,
      termino: 0,
      estado: 'pending'
    });
  }

  removeSubaccion(index: number) {
    this.subacciones.splice(index, 1);
  }

  submitForm() {
    // Lógica para enviar el formulario
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  goBack(): void {
    this.location.back();
  }
/*   

  subacciones: any[] = [{ subaccion: '', area: '', responsable: '', inicio: '', termino: '' }];
  numSubacciones: number = 1;

  onSubmit() {
    this.subacciones.forEach(subaccion => {
      const newSubaccion = { ...this.subacciones, ...subaccion };
      this.subaccionService.addSubaccion(newSubaccion);
    });
    // this.openModal();
  }

  generateSubacciones() {
    this.subacciones = Array.from({ length: this.numSubacciones }, () => ({ subaccion: '', area: '', responsable: '', inicio: '', termino: '' }));
  }

  increaseSubacciones() {
    this.numSubacciones++;
    this.generateSubacciones();
  }
  
  decreaseSubacciones() {
    if (this.numSubacciones > 1) {
      this.numSubacciones--;
      this.generateSubacciones();
    }
  } */
}