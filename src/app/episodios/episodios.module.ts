import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { RowEpisodeComponent } from './row-episode/row-episode.component';



@NgModule({
  declarations: [
    HomeDashboardComponent,
    RowEpisodeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    
    HomeDashboardComponent,
    RowEpisodeComponent
  ]
})
export class EpisodiosModule { }
