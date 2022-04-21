import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let source$ = interval(1000);
    let source2$ = interval(500);
    source$
      .pipe(withLatestFrom(source2$))
      .subscribe(data => console.log(data));
    // const clicks = fromEvent(document, 'click');
    // const timer = interval(1000);
    // const result = clicks.pipe(withLatestFrom(timer));
    // result.subscribe(x => console.log(x));
  }

}
