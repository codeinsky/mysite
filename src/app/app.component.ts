import { Component,OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { IpServiceService } from "./services/ip-service.service";
import { RestRequestsService} from "./services/rest-requests.service";
import { Visitor } from "./rest-interfaces/visit"



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public disableVote:boolean = true;
  title = 'MySite';
  private cookieExprHr:number=5;
  public IpAddress:String = null;

  constructor(private cookie:CookieService, 
              private ip:IpServiceService,
              private restRequestService:RestRequestsService){}

  ngOnInit(): void {
    this.newUserArrived();
  }

  newUserArrived(){
    this.ip.getIPAddress().subscribe((res:any)=>{
      let IpAddress:String = res.ip;
      let visitor:Visitor  = {id:null , date:new Date() , ip:IpAddress, comment:"Visitor from fronted1"};
      this.restRequestService.visitorRequest(visitor).subscribe(
        {
          next: data => console.log(data),
          error: error => console.error("Error response", error)
        }
          );
    });
  }


  // checkCookie(){
  //   let cookies = this.cookie.get("visitorid");
  //   if (cookies == ""){
  //     console.log("First time visit")
  //     this.cookie.set("visitorid","1234", 0.5);
  //     console.log("cookie set")
  //   } 
  //   else {
  //     console.log("That is user ID, already visited" + " " + this.cookie.get("visitorid"));
  //     this.disableVote=false;

  //   }
  // }

  // resetCookie(){
  //     this.cookie.deleteAll();
  //     console.log("All cookies deleted");
  // }


}
