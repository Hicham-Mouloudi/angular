import { keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';

export const transitions = [
    transition('* => swing', animate(1000, keyframes(kf.swing))),
    transition('* => zoomIn', animate(1000, keyframes(kf.zoomIn)))
  ];