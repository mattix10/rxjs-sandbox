import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartwithOperatorComponent } from './startwith-operator.component';

describe('StartwithOperatorComponent', () => {
  let component: StartwithOperatorComponent;
  let fixture: ComponentFixture<StartwithOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartwithOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartwithOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
