import { Component, OnInit } from '@angular/core';
import * as tr from '../../utils/triggers';

@Component({
  selector: 'app-logo',
  templateUrl: './app-logo.component.html',
  styleUrls: ['./app-logo.component.css'],
  animations: tr.logoTrigger
})

export class AppLogoComponent {
  animationState: string;

  constructor(){
    this.startAnimation("zoomIn");
  }

  startAnimation(state) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }
  resetAnimationState() {
    this.animationState = '';
  }
  
}
