import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, switchMapTo, take, tap } from 'rxjs';

@Component({
  selector: 'app-switch-map-to-operator',
  templateUrl: './switch-map-to-operator.component.html',
  styleUrls: ['./switch-map-to-operator.component.scss']
})
export class SwitchMapToOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // interval(300)
    // .pipe(
    //   tap(data => console.log(data)),
    //   switchMapTo(
    //     interval(200)
    //   ), take(10)).pipe(tap(data => console.log(data)))
    // .subscribe(data => console.log(data))
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(switchMapTo(interval(1000)));
    result.subscribe(x => console.log(x));
  }

}
