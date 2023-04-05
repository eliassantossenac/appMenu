import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CheckboxPage implements OnInit {
  meses: any[] = [
    {nomeDoMes: 'janeiro', valor: 1, marcado:true},
    {nomeDoMes: 'fevereiro', valor: 2, marcado:false},
    {nomeDoMes: 'março', valor: 3, marcado:true},
    {nomeDoMes: 'abril', valor: 4, marcado:true},
    {nomeDoMes: 'maio', valor: 5, marcado:false},
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.meses)
  }

  exibirMeses() {
    console.log(this.meses);
  }

}
