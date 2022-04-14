import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { reduce, takeUntil, mapTo } from 'rxjs/operators';
@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.scss']
})
export class ReduceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const clicksInFiveSeconds = fromEvent(document, 'click').pipe(
      takeUntil(interval(5000)),
    );
    const ones = clicksInFiveSeconds.pipe(mapTo(1));
    const seed = 0;
    const count = ones.pipe(reduce((acc, one) => acc + one, seed));
    count.subscribe(x => console.log(x));
  }

}
