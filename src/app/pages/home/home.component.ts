import { Component } from '@angular/core';
import { SubaccionService } from '../../services/subaccion.service';
import { Subaccion } from '../../services/subaccion.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  subacciones: Subaccion[] = [];

  constructor(private subaccionService: SubaccionService) {}

  ngOnInit(): void {
    this.subaccionService.getSubacciones().subscribe((subaccion) => {
      this.subacciones = subaccion;
    });
  }

}
