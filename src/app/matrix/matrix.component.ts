import { Component, OnInit} from '@angular/core';
import { trigger , state , transition , animate , style} from '@angular/animations';
import {matrixParams} from "./matrixParams"


@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css'],
  animations:[
   trigger('matrix' , [
     transition('void => *' , [
       style({opacity:0.4 , position:'absolute', top:'5px', left:'{{left}}'+'px', color:'green'}),
       animate('{{time}}'+'ms' , style({opacity:1, position:'absolute', top:'100px' , left:'{{left}}' + 'px'}))
        ], {params: { time:'100' , left:'5'}})
      ])
    ]})

export class MatrixComponent implements OnInit {

  private matrixCount=10;
  private matrixDelayed=10;
  public params:matrixParams[]=[];
  constructor() { }
  
  ngOnInit(): void {

  }

  generateParams(){
    for (var i=1 ; i<this.matrixCount ; i++){
      let param:matrixParams = {symbol:"", width:"" , speed:""};
      let result:number =  Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      let left:number = Math.floor(Math.random() * (1 - 40+ 360)) + 40;
      let time:number = Math.floor(Math.random() * (1 - 700 + 2000)) + 700;

      param.symbol = result.toString();
      param.width = left.toString();
      param.speed = time.toString();
      this.params.push(param);   
    
    }

  }

  start(){
    for (var x = 0 ; x < this.matrixDelayed ; x++){
      setTimeout (()=>{this.generateParams(); }, x*350);
      // this.generateParams();
    }
   
    this.params=[];
  }
  
  }






