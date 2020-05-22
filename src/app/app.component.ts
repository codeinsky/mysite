import { Component,OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { IpServiceService } from "./services/ip-service.service";
import { RestRequestsService} from "./services/rest-requests.service";
import { Visitor } from "./rest-interfaces/visit";
import { DeviceDetectorService } from 'ngx-device-detector';



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
  public helloCSStop:String = '130';
  public helloCSSleft:String= '200';
  public fontSize:String = '35'; 
  public iConeHeigh:String = '80';
  public iConeWidth:String = '80';
  public routerWidth:String='450';
  public voteTop:String='540';
  public iconTop:String='650';
  public voteLeft:String='50';
  public technologiesTop:String='350';
  public technologiesLeft:String='100';
  public ifMobile:boolean=false; 

  constructor(private cookie:CookieService, 
              private ip:IpServiceService,
              private restRequestService:RestRequestsService,
              private deviceDetector:DeviceDetectorService){

                this.ifMobileCSS();
              }

             
  ngOnInit(): void {
    //this.newUserArrived();
    this.newUserLogToDb();
  }

  ifMobileCSS(){
    if (this.deviceDetector.isMobile()){
        console.log("that is mobile device");
        this.helloCSStop = "300";
        this.helloCSSleft = "2";
        this.fontSize="20";
        this.iConeHeigh = '80';
        this.iConeWidth = '80';
        this.routerWidth = '450';
        this.voteTop = '740';
        this.iconTop = '850';
        this.voteLeft = '110';
        this.technologiesTop= '650';
        this.technologiesLeft = '80';
       

    }
    else if (this.deviceDetector.isTablet()){
      console.log ("That is a tablet ");
    }

    else {
      console.log("That is a desktop");
    }
  }

  // newUserArrived(){
  //   this.ip.getIPAddress().subscribe((res:any)=>{
  //     let IpAddress:String = res.ip;
  //     let visitor:Visitor  = {id:null , date:new Date() , ip:IpAddress, comment:"Visitor from fronted1"};
  //     this.restRequestService.visitorRequest(visitor).subscribe(
  //       {
  //         next: data => console.log(data),
  //         error: error => console.error("Error response", error)
  //       }
  //         );
  //   });
  // }
  // Need test of next mmethod insated in previus TEST 

  newUserLogToDb(){
    let IpAddress:String;
    this.ip.getIPAddress().subscribe(
      (res:any) =>{
        IpAddress = res.ip;
        let visitor:Visitor  = {id:null , date:new Date() , ip:IpAddress, comment:"Visitor from fronted1"};
        console.log(res.ip);
        this.restRequestService.visitorRequest(visitor).subscribe(
          (res:any)=>{console.log("user saved")},
          (error)=>{console.log("user save failed")}
        );
      }, 

      (error)=>{
        IpAddress = "anonymous visitor";
        let visitor:Visitor  = {id:null , date:new Date() , ip:IpAddress, comment:"Visitor from fronted1"};
        console.log(console.log(error));
        this.restRequestService.visitorRequest(visitor).subscribe(
          (res:any)=>{console.log("anonymous user saved")},
          (error)=>{console.log("soaving anonymous user failed")}
        );
      }
    );
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
