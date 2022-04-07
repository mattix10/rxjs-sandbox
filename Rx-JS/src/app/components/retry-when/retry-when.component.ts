import { Component, OnInit } from '@angular/core';
import { timer, interval } from 'rxjs';
import { map, tap, retryWhen, delayWhen } from 'rxjs/operators';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss']
})
export class RetryWhenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  const source = interval(1000);
  const example = source.pipe(
  map(val => {
    if (val > 3) {
      // error will be picked up by retryWhen
      throw val;
    }
    return val;
  }),
  retryWhen(errors =>
    errors
      .pipe(
      // log error message
      tap(val => console.log(`Value ${val} was too high!`)),
      // restart in 5 seconds
      delayWhen(val => timer(val * 1000))
      )
    )
  );
  const subscribe = example.subscribe(val => console.log(val));
 
// results:
//   0
//   1
//   2
//   3
//   "Value 4 was too high!"
//  --Wait 5 seconds then repeat
  }

}
