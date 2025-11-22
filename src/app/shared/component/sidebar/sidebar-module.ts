import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Menu, MenuItem} from '../../../core/services/menu';
import {Auth} from '../../../core/services/auth';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./siderbar.component.css']
})


export class SidebarModule implements OnInit {

  menuItems:MenuItem[] = [];
  username:string = '';
  isMenuOpen:boolean = window.innerWidth >= 992; // Abierto en desktop, cerrado en móvil

  constructor(
    private menuService:Menu,
    private authService:Auth,
    private router: Router
  ){}

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
    this.username = this.authService.getUser()|| 'usuario';
  }

  // Navegar en una ruta y marcarla como activa
  navigateTo(route:string):void{
    this.menuService.setActiveItem(route);
    this.router.navigate([route])
  }

  // togle del menu en moviles

  toggleMenu():void{
    this.isMenuOpen = !this.isMenuOpen;
  }

  //sing out -> cerrar sesion

  logaut():void{
    if(confirm('seguro que quieres cerrar sesion?')){
      this.router.navigate(['/login']);
    }
  }












}
