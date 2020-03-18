import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcScreenComponent } from './pc-screen.component';

describe('PcScreenComponent', () => {
  let component: PcScreenComponent;
  let fixture: ComponentFixture<PcScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
