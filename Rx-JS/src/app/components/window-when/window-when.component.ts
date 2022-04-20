import { Component, OnInit } from '@angular/core';
import { concat, concatAll, interval, map, merge, mergeAll, mergeMap, take, toArray, windowWhen } from 'rxjs';

@Component({
  selector: 'app-window-when',
  templateUrl: './window-when.component.html',
  styleUrls: ['./window-when.component.scss']
})
export class WindowWhenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let source$ = interval(1000);
    // source$ .pipe(
    //   windowWhen(() => interval(2000)),
    //   mergeMap(val => val.pipe(toArray()))
    // )
    // .subscribe(data => console.log(data))

    // let source1$ = interval(1000).pipe(
    //   map(val => 'value from source 1 ' + val),
    //   take(5)
    // );
    // let source2$ = interval(500).pipe(
    //   map(val => 'value from source 2 '+ val),
    //   take(3)
    // )
    // merge(source1$, source2$).subscribe(data => console.log(data));
    // concat(source1$, source2$)
    //   .subscribe(data => console.log(data));
    // source1$
    //   .pipe(
    //     map(val => source2$),
    //     concatAll()
    //   )
    //   .subscribe(data => console.log(data))
    // mergeAll()
    
  }

}
