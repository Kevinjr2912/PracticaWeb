import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './episodios/home-dashboard/home-dashboard.component';
import { ListCharacterComponent } from './personajes/list-character/list-character.component';


const routes: Routes = [
  {path: '', component:HomeDashboardComponent},
  {path: 'characters/:id', component: ListCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
