import { Injectable } from '@angular/core';
import { Project } from '../rest-interfaces/project';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects:Project[]
  constructor() { }
  getProjectsLocal(){

  this.projects = [
      {
        id:1,
        name:"THAT SITE",  
        system:"Angular, Spring Boot, Android Studio, Docker", 
        comment:"Front-end developed on Aangular 9. Used Bootstrap, Angular Animations, Angular material. Backend developed on Java Spring, used Spring Web for Rest API and Hibernate for connection with Postgres SQL. Android app, gives option to see reports(Visitors, Votes) and update data. Packed as a docker container and deployed on DigitalOcean droplet. SSL secured." ,
        links:["https://github.com/codeinsky/mysite","https://github.com/codeinsky/mysitebackend","https://github.com/codeinsky/My_site_android_client"],
        images:[
                "/images/siteHome.png", 
                "/images/siteLogin.png" , 
                "/images/siteVisitors.png",
                "/images/siteLikes.png" 
                ]
      },
      {
        id:2,
        name:"COUPON SYSTEM",  
        system:"Spring Boot, Hibernate, SQL, Angular, Postgres ", 
        comment:"Front-end developed on Angular. Server side builded on Java Spring Boot, Spring WEB, Hibernate, Postgres SQL. Deployed on Heroku.com. Site has three levels of  log in: Admin, Company, Client. Company creates coupons and client can buy. Admin has full administration rights over the system." ,
        links:["https://couponsystemv1.herokuapp.com/", "https://github.com/codeinsky/CouponSystemPstGres","https://github.com/codeinsky/couponSystemAngular"],
        images:[
          // "/images/couponAdmin.jpeg", 
          // "/images/couponCompanies.jpeg", 
          // "/images/couponCustomerList.jpeg", 
          // "/images/couponLogin.jpeg", 
        ]
      } ,
      {
        id:3,
        name:"ANDROID SMS PICKER",  
        system:"ANDROID STUDIO", 
        comment:"Small app - retrieves all incoming SMS messages, and looks for common words. Saves needed sms or part of it into SQLite." ,
        links:[],
        images:[]
      },
      {
        id:4,
        name:"APP",  
        system:"ANDROID STUDIO, FIREBASE, JAVA EE", 
        comment:"App for online orders  - under construction" ,
        links:[],
        images:[]
      }
    ];
    
  }
}
