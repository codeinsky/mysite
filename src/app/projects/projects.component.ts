import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from '../rest-interfaces/project';
import { ProjectsService} from '../services/projects.service';
import { MatDialog , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProjectImageDialogComponent } from '../project-image-dialog/project-image-dialog.component'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'], 
  encapsulation:ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  public projects:Project[];
  projectService:ProjectsService;
  constructor(public dialog:MatDialog , projectService:ProjectsService) {
    projectService.getProjectsLocal();
    this.projects = projectService.projects;
  }

  ngOnInit(): void {
   // this.projectService.data.subscribe(data => this.projects = data);
  }
  openDialog(link:string){
    this.dialog.open(ProjectImageDialogComponent , {
      data : { passedLink:link}
    });
  }



}
