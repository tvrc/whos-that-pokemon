import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { OngoingPlayComponent } from './pages/ongoing-play/ongoing-play.component';
import { AfterPlayComponent } from './pages/after-play/after-play.component';
import { CanActivateGameUrlService } from './shared/services/can-activate-game-url.service';

const routes: Routes = [
  {
    path: 'start',
    pathMatch: 'full',
    component: MainPageComponent
  },
  {
    path: 'game',
    pathMatch: 'full',
    component: OngoingPlayComponent,
    canActivate: [CanActivateGameUrlService]
  },
  {
    path: 'results',
    pathMatch: 'full',
    component: AfterPlayComponent,
    canActivate: [CanActivateGameUrlService]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'start'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
