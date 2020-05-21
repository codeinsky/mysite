import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-project-image-dialog',
  templateUrl: './project-image-dialog.component.html',
  styleUrls: ['./project-image-dialog.component.css']
})
export class ProjectImageDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  close(){
    
  }

}
