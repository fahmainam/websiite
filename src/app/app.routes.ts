
import { StatCardOne } from './stat-card-one/stat-card-one';
import { SidebarComponent } from './sidebar/sidebar';
import { Routes } from '@angular/router';
import { Mainbody } from './mainbody/mainbody';
import { GraphOne } from './graph-one/graph-one';


export const routes: Routes = [
  {
    path: 'mainbody',
    component: Mainbody // default main page
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    component: Mainbody
  },

  {
    path: 'graph-one',
    component: GraphOne
  },
  {
    path: 'stat-card-one',
    component: StatCardOne
  },
  
  {
    path: 'graph-one',
    component: GraphOne
  },
  {
    path:   'app-sidebar',
    component: SidebarComponent
  },
    
  
];
