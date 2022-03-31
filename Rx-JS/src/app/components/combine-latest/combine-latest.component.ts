import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source1$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
        observer.error('error')
      }, 1000);
    });

    let source2$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(10);
      }, 5000);
    });

    combineLatest([source1$, source2$]).subscribe(data => console.log(data));

    const observables = {
      a: of(1).pipe(delay(1000), startWith(0)),
      b: of(5).pipe(delay(5000), startWith(0)),
      c: of(10).pipe(delay(10000), startWith(0))
    };
    const combined = combineLatest(observables);
    combined.subscribe(value => console.log(value));
    // Logs
    // {a: 0, b: 0, c: 0} immediately
    // {a: 1, b: 0, c: 0} after 1s
    // {a: 1, b: 5, c: 0} after 5s
    // {a: 1, b: 5, c: 10} after 10s
  }

}
