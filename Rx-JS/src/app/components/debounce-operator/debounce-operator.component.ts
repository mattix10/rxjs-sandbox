import { Component, OnInit, ViewChild } from '@angular/core';
import { debounce, from, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-debounce-operator',
  templateUrl: './debounce-operator.component.html',
  styleUrls: ['./debounce-operator.component.scss']
})
export class DebounceOperatorComponent implements OnInit {

  @ViewChild('button') button: any;
   constructor() { }

  ngOnInit(): void {
    interval(2000)
      .pipe(
        debounce((value) => interval(value * 200))
      )
      .subscribe(data => console.log(data))
  }

  ngAfterViewInit () {
    let buttonEvent = fromEvent(this.button.nativeElement, 'click')
    buttonEvent
      .pipe(
        debounce(value => interval(1000))
      )
      .subscribe(data => console.log(data))

  }

}
