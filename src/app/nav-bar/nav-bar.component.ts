import { Component, OnInit } from '@angular/core';
import { fadeInFadeOut, slideInAnimation } from '../../animations'
import { Router, RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations:[
    fadeInFadeOut,
    slideInAnimation
  ]
})
export class NavBarComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


  constructor(private router: Router) {}
  
  ngOnInit(): void {
  }

  checkHome() {
    return this.router.url === '/home';
  }

}
