import { Component, OnInit } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../keyframes';

@Component({
  selector: 'app-logo',
  templateUrl: './app-logo.component.html',
  styleUrls: ['./app-logo.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => zoomIn', animate(1000, keyframes(kf.zoomIn)))
    ])
  ]
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
