import { Component, OnInit } from '@angular/core';
import { combineLatest, combineLatestAll, fromEvent, interval, map, of, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest-all',
  templateUrl: './combine-latest-all.component.html',
  styleUrls: ['./combine-latest-all.component.scss']
})
export class CombineLatestAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let source$ = interval(1000).pipe(take(4));

    // source$ .pipe(
    //   map(value => interval(1000).pipe(take(4))),
    //   combineLatestAll()
    // )
    // .subscribe((data: any) => {
    //   return console.log(data);
    // })
    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(
    //   map(ev => {
    //     const number = Math.random() * 2000;
    //     console.log(number)
    //     return interval(number).pipe(take(8))
    //   }
    //   ),
    //   take(2)
    // );
    // const result = higherOrder.pipe(
    //   combineLatestAll()
    // );
     
    // result.subscribe(x => console.log(x));
    const c1 = of(5, 15, 25);
    const c2 = of(6, 16, 26);
    const c3 = of(7, 17, 27);
    const s2 = combineLatest(c1,c2, c3);
    // s2.subscribe(console.log) // Outputs = [25,26, 7] [25,26, 17] and [25, 26, 27];
    // The above example can also be written as -

    const s3 = of(c1, c2, c3).pipe(combineLatestAll()); // Outputs = [25,26, 7] [25,26, 17] and [25, 26, 27];
    s3.subscribe(console.log);


  }

}
