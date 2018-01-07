import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as tr from '@myapp-utils/triggers';

@Component({
  selector: 'app-logo',
  templateUrl: './app-logo.component.html',
  styleUrls: ['./app-logo.component.css'],
  animations: tr.logoTrigger
})

export class AppLogoComponent {
  animationState: string;
  clicked = false;

  constructor(public router : Router){
    //this.startAnimation("zoomIn");
  }

  startAnimation(state) {
    this.clicked = true;
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
    if (this.clicked) {
      this.router.navigate(['/main']);
      this.clicked = false;
    }
  }
  
}
