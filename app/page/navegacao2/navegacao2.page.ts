import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao2',
  templateUrl: './navegacao2.page.html',
  styleUrls: ['./navegacao2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Navegacao2Page implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  showPageNavegacao(){
    this.navCtrl.navigateForward("navegacao");
  }


}
