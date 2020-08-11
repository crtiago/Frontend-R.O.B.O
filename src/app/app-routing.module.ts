import { PageRoboComponent } from './views/page-robo/page-robo.component';
import { RoboResolve } from './_helpers/robo-resolve';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
      {   
        path: 'page-robo',          
        component: PageRoboComponent,   
        resolve:{         
          response: RoboResolve  
        }   
      },  
  { path: '', redirectTo: 'page-robo',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
