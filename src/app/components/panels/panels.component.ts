import { Component, Input, OnInit } from '@angular/core';
import { Subaccion } from '../../services/subaccion.service';

@Component({
  selector: 'app-panels',
  standalone: false,
  
  templateUrl: './panels.component.html',
  styleUrl: './panels.component.css'
})

export class PanelsComponent implements OnInit {
  @Input() subacciones: Subaccion[] = [];

  pendingCount: number = 0;
  approvedCount: number = 0;
  rejectedCount: number = 0;

  ngOnInit(): void {
    this.updateCounts();
  }

  ngOnChanges(): void {
    this.updateCounts();
  }

  updateCounts(): void {
    this.pendingCount = this.subacciones.filter(subaccion => subaccion.estado === 'pending').length;
    this.approvedCount = this.subacciones.filter(subaccion => subaccion.estado === 'approved').length;
    this.rejectedCount = this.subacciones.filter(subaccion => subaccion.estado === 'rejected').length;
  }
}
