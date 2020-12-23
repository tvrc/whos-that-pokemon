import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationTokenService } from '../../shared/services/navigation-token.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router,
              private navigationTokenService: NavigationTokenService) { }

  ngOnInit(): void {
  }

  play(): void {
    this.router.navigate(['game'], {
      ...this.navigationTokenService.getObjectWithNavigationToken()
    });
  }

}
