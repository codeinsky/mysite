import { Component,OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { IpServiceService } from "./ip-service.service";
import { RestRequestsService} from "./rest-requests.service";
import { Visitor } from "./rest-interfaces/visit"
import { Vote } from "./rest-interfaces/vote"

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

  constructor(private cookie:CookieService, 
              private ip:IpServiceService,
              private restRequestService:RestRequestsService){}

  ngOnInit(): void {
    this.newUserArrived();
  }

  vote(voteResult:String){
   // this.disableVote=false;
    //Rtrive IP address of the vote client 
    this.ip.getIPAddress().subscribe(
      
      (res:any)=>{
       let vote:Vote = {id:null,liked:null,unliked:null,date:new Date(),ipVoted:res.ip,cookieVoted:null}
       if (voteResult=="like"){
          vote.liked=true;
          vote.unliked=false;
       }   
       else {
        vote.liked=false;
        vote.unliked=true;
       }

    //Register like on backend DB  
      this.restRequestService.vote(vote).subscribe(
        {
          next: data => 
          {
            console.log("Liked" + data); 
          },
          error: error => 
          {
            console.error("Error response", error);
          }
        }
          );
    });
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
