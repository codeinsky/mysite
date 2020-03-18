import { Component, OnInit, Input } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-typing-text',
  templateUrl: './typing-text.component.html',
  styleUrls: ['./typing-text.component.css']
})
export class TypingTextComponent implements OnInit {
  @Input() commandLine:String;
  @Input() color:String;
  @Input() delayTime:number;
  public chars:string[];
  public interval;
  constructor() { 
   }

  ngOnInit(): void {
    this.chars = [];
    console.log(this.color);
    this.getArrayVallues(0);
  

  }

  getArrayVallues(index){
    this.interval = setInterval(()=> {
      this.chars.push(this.commandLine.split('')[index]);
      index++;
    },this.delayTime);
    if (index == this.commandLine.split('').length){
      clearInterval(this.interval);
      console.log("onterval cleared")
    }
    }

}
