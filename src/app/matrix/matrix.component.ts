import { Component, OnInit } from '@angular/core';
import { trigger , state , transition , animate , style} from '@angular/animations';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css'],
  animations:[
   trigger('matrix' , [
     transition('void => *' , [
       style({opacity:0 , position:'relative', top:'5px' , left:'5px'}),
       animate('{{time}}' , style({opacity:1, position:'relative', top:'100px' , left:'5px' }))
        ], {params: { time:'100ms'}})
      ])
    ]})

export class MatrixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
