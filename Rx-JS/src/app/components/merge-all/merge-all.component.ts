import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, take, exhaustAll, mergeAll, tap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.html',
  styleUrls: ['./merge-all.component.scss']
})
export class MergeAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click')
      .pipe(tap(() => console.log('click')));
    const higherOrder = clicks.pipe(
      map(ev => interval(1000).pipe(take(3))),
    );
    const firstOrder = higherOrder.pipe(mergeAll());
    firstOrder.subscribe(x => console.log(x));
  }

}
