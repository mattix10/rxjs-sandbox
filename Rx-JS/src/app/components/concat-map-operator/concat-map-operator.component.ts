import { Component, OnInit } from '@angular/core';
import { concatMap, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-concat-map-operator',
  templateUrl: './concat-map-operator.component.html',
  styleUrls: ['./concat-map-operator.component.scss']
})
export class ConcatMapOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        concatMap((id) => {
          console.log(id);
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
            map((data) => {
              return data.response;
            })
          );
        })
      )
      .subscribe(data => console.log(data))
  }

}
