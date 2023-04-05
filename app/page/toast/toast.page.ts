import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ToastPage implements OnInit {

  constructor(private toastCrtl: ToastController) { }

  ngOnInit() {
  }

  async toastSimples() {
    let toast = await this.toastCrtl.create({
      message: 'Olá Mundo',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }


  async toastOpcoes() {
    const toast = await this.toastCrtl.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }



}
