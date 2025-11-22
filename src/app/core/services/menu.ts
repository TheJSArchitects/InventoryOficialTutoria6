import { Injectable } from '@angular/core';

export interface MenuItem {
  icon: string;
  label: string;
  route: string;
  active?: boolean;
  badge?: string;
  section?: string;
}

@Injectable({
  providedIn: 'root',
})
export class Menu {

  private menuItems: MenuItem[] = [
    { icon: 'bi bi-grid', label: 'Dashboard', route: '/dashboard', active: false, section: 'PRINCIPAL' },
    { icon: 'bi bi-cart', label: 'Compras', route: '/compras', active: true, badge: '3', section: 'PRINCIPAL' },
    { icon: 'bi bi-truck', label: 'Proveedores', route: '/proveedores', active: false, section: 'PRINCIPAL' },
    { icon: 'bi bi-box-seam', label: 'Almacenamiento', route: '/almacenamiento', active: false, section: 'PRINCIPAL' },
    { icon: 'bi bi-calendar', label: 'Calendario', route: '/calendario', active: false, section: 'PRINCIPAL' },
    { icon: 'bi bi-people', label: 'Contactos', route: '/contactos', active: false, section: 'PRINCIPAL' },
    { icon: 'bi bi-shield-check', label: 'Permisos', route: '/permisos', active: false, section: 'PRINCIPAL' },
    { icon: 'bi bi-bar-chart', label: 'Reportes', route: '/reportes', active: false, section: 'CONFIGURACIÓN' },
    { icon: 'bi bi-gear', label: 'Ajustes', route: '/ajustes', active: false, section: 'CONFIGURACIÓN' },
  ]

  constructor() {}

  //    obtiene todos los elementos del menu
  getMenuItems():MenuItem[]{
    return this.menuItems;
  }

  //marcar o señalar el elemento como activo

  setActiveItem(route:string):void{
    this.menuItems.forEach(item => {
      item.active = item.route === route;
    })
  }

}
