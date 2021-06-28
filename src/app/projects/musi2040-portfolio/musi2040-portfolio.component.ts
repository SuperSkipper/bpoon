import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-musi2040-portfolio',
  templateUrl: './musi2040-portfolio.component.html',
  styleUrls: ['./musi2040-portfolio.component.css']
})
export class MUSI2040PortfolioComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
