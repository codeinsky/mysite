import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-project-image-dialog',
  templateUrl: './project-image-dialog.component.html',
  styleUrls: ['./project-image-dialog.component.css']
})
export class ProjectImageDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProjectImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close(){
    
  }

}
