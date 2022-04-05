import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';
import { map, take, exhaustAll, tap } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-all',
  templateUrl: './exhaust-all.component.html',
  styleUrls: ['./exhaust-all.component.scss']
})
export class ExhaustAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(
    //   map(ev => interval(1000).pipe(take(3))),
    // );
    // const firstOrder = higherOrder.pipe(exhaustAll());
    // firstOrder.subscribe(x => console.log(x));
    const clicks = fromEvent(document, 'click');
    const higherOrder = clicks.pipe(
      tap((data) => console.log('omitted observable value: ', data)),
      map(ev => interval(3000))
    );
    const firstOrder = higherOrder.pipe(exhaustAll());
    firstOrder.subscribe(x => console.log('emitted value from second Observable', x));
  }

}
