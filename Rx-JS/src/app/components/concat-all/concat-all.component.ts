import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, take, concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-concat-all',
  templateUrl: './concat-all.component.html',
  styleUrls: ['./concat-all.component.scss']
})
export class ConcatAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const higherOrder = clicks.pipe(
      map(ev => interval(1000).pipe(take(3))),
    );
    const firstOrder = higherOrder.pipe(concatAll());
    firstOrder.subscribe(x => console.log(x));
  }

}
