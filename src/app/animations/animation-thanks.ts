import {trigger , style , state , transition , animate} from "@angular/animations";


export const Thanks = trigger('thanks', [
  state('initial', style({
    transform: 'scale(0)'
    
  })),
  state('final', style({
    transform: 'scale(0.8)'
  })),
  transition('initial=>final', animate('2800ms 500ms'))
])