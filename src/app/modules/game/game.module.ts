import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OngoingPlayComponent } from './pages/ongoing-play/ongoing-play.component';
import { AfterPlayComponent } from './pages/after-play/after-play.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GameRoutingModule } from './game-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { NavigationTokenService } from './shared/services/navigation-token.service';
import { CanActivateGameUrlService } from './shared/services/can-activate-game-url.service';
import { OngoingPlayService } from './pages/ongoing-play/services/ongoing-play.service';


@NgModule({
  declarations: [
    OngoingPlayComponent,
    AfterPlayComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
    TranslateModule.forChild()
  ],
  providers: [
    NavigationTokenService,
    CanActivateGameUrlService,
    OngoingPlayService
  ]
})
export class GameModule { }
