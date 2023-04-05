import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Navegação', url: 'navegacao', icon: 'paper-plane' },
    { title: 'Navegação 2', url: 'navegacao2', icon: 'paper-plane'},
    { title: 'Alert', url: 'alert', icon: 'chatbox'},
    { title: 'Toast', url: 'toast', icon: 'chatbubble'},
    { title: 'Action-Sheet', url: 'actionsheet', icon: 'construct'},
    { title: 'Badge', url: 'badge', icon: 'albums'},
    { title: 'Card', url: 'card', icon: 'albums'},
    { title: 'CheckBox', url: 'checkbox', icon: 'construct'},
    { title: 'Input', url: 'input', icon: 'chatbox'},
  ];
  public labels = [];
  constructor() {}
}
