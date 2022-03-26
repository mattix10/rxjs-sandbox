import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistnictUntilChangedComponent } from './distnict-until-changed.component';

describe('DistnictUntilChangedComponent', () => {
  let component: DistnictUntilChangedComponent;
  let fixture: ComponentFixture<DistnictUntilChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistnictUntilChangedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistnictUntilChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
