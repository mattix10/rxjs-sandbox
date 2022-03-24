import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellingObservablesComponent } from './cancelling-observables.component';

describe('CancellingObservablesComponent', () => {
  let component: CancellingObservablesComponent;
  let fixture: ComponentFixture<CancellingObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancellingObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellingObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
