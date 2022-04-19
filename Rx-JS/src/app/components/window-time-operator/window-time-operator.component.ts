import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { windowTime, map, mergeAll, take } from 'rxjs/operators';

@Component({
  selector: 'app-window-time-operator',
  templateUrl: './window-time-operator.component.html',
  styleUrls: ['./window-time-operator.component.scss']
})
export class WindowTimeOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      windowTime(1000, 5000),
      map(win => win.pipe(take(2))), // each window has at most 2 emissions
      mergeAll(),                    // flatten the Observable-of-Observables
    );
    result.subscribe(x => console.log(x));
  }

}
