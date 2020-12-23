import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OngoingPlayComponent } from './pages/ongoing-play/ongoing-play.component';
import { AfterPlayComponent } from './pages/after-play/after-play.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GameRoutingModule } from './game-routing.module';


@NgModule({
  declarations: [
    OngoingPlayComponent,
    AfterPlayComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
