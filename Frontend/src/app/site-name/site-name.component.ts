import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-site-name',
  standalone: false,
  templateUrl: './site-name.component.html',
  styleUrls: ['./site-name.component.css']
})
export class SiteNameComponent implements OnInit {
  siteName: string = 'PostSpace';
  siteSlogan: string = 'Un’esperienza unica per te!';
  showSiteName: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSiteName = event.urlAfterRedirects === '/home';
      }
    });
  }
}
