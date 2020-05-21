import { Injectable } from '@angular/core';
import { Project } from '../rest-interfaces/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }
  public projects:Project[] = null;
  getProjectsLocal(){
    this.projects = [
      {id:1,name:"Site",  system:"Angular, Spring", comment:"That consists of ..." ,link:"github.com"},
      {id:2,name:"Project",  system:"Spring , SQL ", comment:"That consists of ..." ,link:"github.com/project"},
      {id:3,name:"data system",  system:"Java", comment:" DATA BASE " ,link:"github.com/project"},
    ];
    return this.projects;
  }
}
