import { Component, OnInit } from '@angular/core';
import { Vote } from "../rest-interfaces/vote"
import { IpServiceService } from "../services/ip-service.service";
import { RestRequestsService} from "../services/rest-requests.service";
import { Liked} from '../animations/animation-liked';
import { Thanks} from '../animations/animation-thanks'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
  animations:[Thanks , Liked]
})
export class VoteComponent implements OnInit {
  public disableVote:boolean = true;
  public votedCurrentState = 'initial';
  public thanksCurrentState = 'initial';
  public 
  constructor(private ip:IpServiceService,private restRequestService:RestRequestsService) { }

  ngOnInit(): void {
  }

  vote(voteResult:String){
    
     this.ip.getIPAddress().subscribe(
       (res:any)=>{
        let vote:Vote = {id:null,liked:false,disliked:true,date:new Date(),ipVoted:res.ip,cookieVoted:null}
        if (voteResult=="like"){
           vote.liked=true;
           vote.disliked=false;
        }   
        this.logVoteInDb(vote);

     },
     (error)=>{
       console.log("Failed to retrive the IP");
       let vote = {id:null,liked:false,disliked:true,date:new Date(),ipVoted:"anonyoums",cookieVoted:null};
       if (voteResult=="like"){
        vote.liked=true;
        vote.disliked=false;}   
        this.logVoteInDb(vote);
        }
    );
   }

    logVoteInDb(vote:Vote){
      this.restRequestService.vote(vote).subscribe(
        {
          next: data => 
          {
            console.log("Voted " + data); 
            this.likedStarAnimation();
            this.thanksStartAnimation();
          },
          error: error => 
          {console.error("Error response ", error);}
        }
          );      

    }




   likedStarAnimation(){
     if (this.votedCurrentState="initial"){
        this.votedCurrentState="final"
     }
     else {
        console.log("already voted");
     }
   }

   thanksStartAnimation(){
     console.log("animation done")
     if (this.thanksCurrentState=="initial"){
        this.thanksCurrentState="final"
     }

   }


}
