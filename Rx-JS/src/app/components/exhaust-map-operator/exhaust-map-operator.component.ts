import { Component, OnInit } from '@angular/core';
import { exhaustMap, filter, interval, map, of, take, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-exhaust-map-operator',
  templateUrl: './exhaust-map-operator.component.html',
  styleUrls: ['./exhaust-map-operator.component.scss']
})
export class ExhaustMapOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(100)
    .pipe(
      filter(id => id > 0),
      tap(id => console.log(id)),
      exhaustMap((id) => {
        return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
          map((data) => {
            return data.response;
          })
        );
      }),
      take(5)
    )
    .subscribe(data => console.log(data))
  }

}
