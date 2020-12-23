import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { finalize, takeWhile, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NavigationTokenService } from '../../shared/services/navigation-token.service';

@Component({
  selector: 'app-ongoing-play',
  templateUrl: './ongoing-play.component.html',
  styleUrls: ['./ongoing-play.component.scss']
})
export class OngoingPlayComponent implements OnInit, OnDestroy {

  timer = 10;
  private timerSub: Subscription;

  constructor(private router: Router,
              private navigationTokenService: NavigationTokenService) { }

  ngOnInit(): void {
    this.setupTimer();
  }

  private setupTimer(): void {
    this.timerSub = interval(1000)
      .pipe(
        tap(() => --this.timer),
        takeWhile(() => this.timer > 0),
        finalize(() => this.navigateToResults())
      ).subscribe();
  }

  private navigateToResults(): void {
    this.router.navigate(['results'], {
      ...this.navigationTokenService.getObjectWithNavigationToken()
    });
  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }
}
