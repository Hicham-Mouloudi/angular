import { keyframes, style } from '@angular/animations';

//https://github.com/daneden/animate.css/tree/master/source
export const swing = [
    style({transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2}),
    style({transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4}),
    style({transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6}),
    style({transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8}),
    style({transform: 'none', offset: 1})
]

export const zoomIn = [
    style({transform: 'scale3d(.3, .3, .3)', opacity: 0}),
    style({transform: 'scale3d(1, 1, 1)', opacity: 1}),
]

 