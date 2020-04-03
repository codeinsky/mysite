import { Component,OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { IpServiceService } from "./ip-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public disableVote:boolean = true;
  title = 'MySite';
  private cookieExprHr:number=5;
  public IpAddress:String = null;
  constructor(private cookie:CookieService, private ip:IpServiceService){}

  ngOnInit(): void {

    console.log("ngOnIniti started");
    this.getIp();
    this.checkCookie();
    //this.resetCookie();
  }

  like(){
    console.log("Liked");
    this.disableVote=false;
  }

  dislike(){
    console.log("DisLiked");
    this.disableVote=false;
  }

  getIp(){
    this.ip.getIPAddress().subscribe((res:any)=>{
      this.IpAddress = res.ip;
      console.log("ip is " + this.IpAddress);
      this.IpAddress = "";
    })
  }

  checkCookie(){
    let cookies = this.cookie.get("visitorid");
    if (cookies == ""){
      console.log("First time visit")
      this.cookie.set("visitorid","1234", 0.5);
      console.log("cookie set")
    } 
    else {
      console.log("That is user ID, already visited" + " " + this.cookie.get("visitorid"));
      this.disableVote=false;

    }
  }

  resetCookie(){
      this.cookie.deleteAll();
      console.log("All cookies deleted");
  }
}
