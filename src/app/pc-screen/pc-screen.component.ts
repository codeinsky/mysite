import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pc-screen',
  templateUrl: './pc-screen.component.html',
  styleUrls: ['./pc-screen.component.css']
})
export class PcScreenComponent implements OnInit {
  public show:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  typeHello(){
    this.show=true;
  };

}
