import { Component, OnInit, Input , SimpleChange} from '@angular/core';
import { trigger , state , transition , animate , style} from '@angular/animations';
import {matrixParams} from "./matrixParams"

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css'],
  animations:[
   trigger('matrix' , [
     transition('void => *' , [
       style({opacity:0 , position:'relative', top:'5px' , left:'{{left}}'+'px' , color:'green'}),
       animate('{{time}}'+'ms' , style({opacity:1, position:'relative', top:'100px' , left:'{{left}}'+'px'}))
        ], {params: { time:'100' , left:'5'}})
      ])
    ]})

export class MatrixComponent implements OnInit {
  @Input() show:Boolean;
  public params:matrixParams[] = [];
  public matrixData: matrixParams[];
  public test= '150';
  constructor() { }
  
  ngOnInit(): void {
    this.generateParams();
  }

  ngOnChanges(changes: SimpleChange) {
    console.log(changes)
  }

  generateParams(){
    for (let i=0; i<100; i++){
      let param:matrixParams = {symbol:"", width:"" , speed:""};
      let result:number =  Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      let left:number = Math.floor(Math.random() * (1 - 5 + 280)) + 5;
      let time:number = Math.floor(Math.random() * (1 - 1000 + 2500)) + 1000;

      param.symbol = result.toString();
      param.width = left.toString();
      param.speed = time.toString();
      this.params.push(param);     
    }
    
  
  }



}
