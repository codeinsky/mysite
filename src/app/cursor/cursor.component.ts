import { Component, OnInit } from '@angular/core';
import { trigger , state , animate , transition , style, animation } from '@angular/animations';



@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css'], 
  // animations:[
  //   trigger('onOf' , [
  //     state('inactive' , style({opacity:0})),
  //     state('active' , style({opacity:1})),
  //     transition('*<=>*' , [
  //       animate(200)
  //     ])
  //   ])
  // ]
})
export class CursorComponent implements OnInit {
  public onOf: Boolean = true;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=> {
      this.onOf = !this.onOf;
    } ,500);
  }
  }




