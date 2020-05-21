import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectImageDialogComponent } from './project-image-dialog.component';

describe('ProjectImageDialogComponent', () => {
  let component: ProjectImageDialogComponent;
  let fixture: ComponentFixture<ProjectImageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectImageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
