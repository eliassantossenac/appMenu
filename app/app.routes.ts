import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'navegacao',
    loadComponent: () => import('./page/navegacao/navegacao.page').then( m => m.NavegacaoPage)
  },
  {
    path: 'navegacao2',
    loadComponent: () => import('./page/navegacao2/navegacao2.page').then( m => m.Navegacao2Page)
  },
  {
    path: 'alert',
    loadComponent: () => import('./page/alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./page/toast/toast.page').then( m => m.ToastPage)
  },
  {
    path: 'actionsheet',
    loadComponent: () => import('./page/actionsheet/actionsheet.page').then( m => m.ActionsheetPage)
  },
  {
    path: 'badge',
    loadComponent: () => import('./page/badge/badge.page').then( m => m.BadgePage)
  },
  {
    path: 'card',
    loadComponent: () => import('./page/card/card.page').then( m => m.CardPage)
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./page/checkbox/checkbox.page').then( m => m.CheckboxPage)
  },
  {
    path: 'input',
    loadComponent: () => import('./page/input/input.page').then( m => m.InputPage)
  },
];
