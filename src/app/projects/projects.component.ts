import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';
import { projectSlide } from '../../animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations:[
    projectSlide
  ]
})
export class ProjectsComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


  constructor(private router: Router) {}
  

  ngOnInit(): void {
  }

}
