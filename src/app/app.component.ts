import { Component } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => zoomIn', animate(1000, keyframes(kf.zoomIn)))
    ])
  ]
})
export class AppComponent {
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
