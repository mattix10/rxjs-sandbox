import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, EMPTY } from 'rxjs';
import { windowToggle, mergeAll, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-window-toggle',
  templateUrl: './window-toggle.component.html',
  styleUrls: ['./window-toggle.component.scss']
})
export class WindowToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = interval(1000);

    source$
      .pipe(
        windowToggle(interval(6000), () => interval(2000)),
        mergeMap(val => val)
      )
      .subscribe(data => console.log(data));
    }

}
