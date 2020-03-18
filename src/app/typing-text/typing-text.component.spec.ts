import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingTextComponent } from './typing-text.component';

describe('TypingTextComponent', () => {
  let component: TypingTextComponent;
  let fixture: ComponentFixture<TypingTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypingTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
