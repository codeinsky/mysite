import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visitor} from '../rest-interfaces/visit';
import { Vote } from '../rest-interfaces/vote'

@Injectable({
  providedIn: 'root'
})
export class RestRequestsService {

  constructor(private http:HttpClient) { }

  public visitorRequest(visitor:Visitor){
    return this.http.post<any>('http://localhost:8181/rest/visitor' , visitor);
        
      }

  public vote(vote:Vote){
    return this.http.post<any>('http://localhost:8181/rest/vote', vote);

  }
   
  }

