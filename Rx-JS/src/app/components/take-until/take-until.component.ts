import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('button') button: any;
  buttonEvent: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.buttonEvent = fromEvent(this.button.nativeElement, 'click')
  }

  startTimer() {
    interval(500)
      .pipe(takeUntil(this.buttonEvent))
      .subscribe(data => console.log(data))
  }

}
