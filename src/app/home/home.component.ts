import { Component, OnInit, ViewChild } from '@angular/core';
import { MatrixComponent } from '../matrix/matrix.component';
import { PcScreenComponent } from '../pc-screen/pc-screen.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public showMatrixTrigger: Boolean = false;
  @ViewChild(MatrixComponent) matrix : MatrixComponent;
  @ViewChild(PcScreenComponent) screen: PcScreenComponent;

  public runClicked:boolean= false; 
  public buttonLabel:String= "RUN";
  public btnCass = "btn btn-secondary";
  constructor() { }

  ngOnInit(): void {
  }
   runTheCode(){
      this.runClicked = true;
      this.buttonLabel = "RAN";
      this.matrix.start();
      this.screen.typeHello();
   }



}
