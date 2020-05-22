import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visitor} from '../rest-interfaces/visit';
import { Vote } from '../rest-interfaces/vote'

@Injectable({
  providedIn: 'root'
})
export class RestRequestsService {
   //localUrl:String = "http://localhost:8181";
  //localUrl:String = "http://167.99.118.237:80";
  localUrl:String="";
  constructor(private http:HttpClient) { }

  public visitorRequest(visitor:Visitor){
    return this.http.post<any>(this.localUrl+'/rest/visitor' , visitor);
        
      }

  public vote(vote:Vote){
    return this.http.post<any>(this.localUrl+'/rest/vote', vote);

  }
   
  }

