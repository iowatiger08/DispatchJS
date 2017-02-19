import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadFormComponent } 	from './home';
import { MsgUploadComponent } 	from './upload';
import { NoContentComponent } 	from './no-content';

 const ROUTES: Routes = [
  { path: '',      	redirectTo: '/home' , pathMatch: 'full'},
  { path: 'load',   component: LoadFormComponent },
  { path: 'home', 	component: LoadFormComponent},
  { path: 'upload', component: MsgUploadComponent },

  { path: '**',    	component: NoContentComponent },
];


export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);