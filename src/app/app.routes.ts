import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import {LayoutModule} from './shared/component/layout/layout-module';
import {Compras} from './features/compras/compras';
import {Proveedores} from './features/proveedores/proveedores';
import {Almacenamiento} from './features/almacenamiento/almacenamiento';
import {Calendario} from './features/calendario/calendario';
import {Contactos} from './features/contactos/contactos';
import {Permisos} from './features/permisos/permisos';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {
    path: '',
    component: LayoutModule,
    children: [
      { path: 'compras', component: Compras},
      { path: 'proveedores', component: Proveedores },
      { path: 'almacenamiento', component: Almacenamiento},
      { path: 'calendario', component: Calendario},
      { path: 'contactos', component: Contactos},
      { path: 'permisos', component: Permisos},
      { path: '', redirectTo: 'compras', pathMatch: 'full' }
    ]
  }
];
