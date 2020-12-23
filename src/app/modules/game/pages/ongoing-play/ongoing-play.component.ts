import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { finalize, takeWhile, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ongoing-play',
  templateUrl: './ongoing-play.component.html',
  styleUrls: ['./ongoing-play.component.scss']
})
export class OngoingPlayComponent implements OnInit, OnDestroy {

  timer = 10;
  private timerSub: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setupTimer();
  }

  private setupTimer(): void {
    this.timerSub = interval(1000)
      .pipe(
        tap(() => --this.timer),
        takeWhile(() => this.timer > 0),
        finalize(() => this.router.navigate(['results']))
      ).subscribe();
  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }
}
