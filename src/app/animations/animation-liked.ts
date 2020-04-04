import {trigger , style , state , transition , animate} from "@angular/animations";


export const Liked = trigger('liked', [
  state('initial', style({
    transform: 'scale(1)'
  })),
  state('final', style({
    transform: 'scale(0)'
  })),
  transition('final=>initial', animate('1000ms')),
  transition('initial=>final', animate('1500ms'))
])