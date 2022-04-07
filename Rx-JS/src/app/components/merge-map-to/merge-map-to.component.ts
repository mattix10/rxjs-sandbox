import { Component, OnInit } from '@angular/core';
import { map, mergeMapTo, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge-map-to',
  templateUrl: './merge-map-to.component.html',
  styleUrls: ['./merge-map-to.component.scss']
})
export class MergeMapToComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        mergeMapTo(
          ajax(`https://jsonplaceholder.typicode.com/posts/2`).pipe(
            map((data) => {
              return data.response
            })
          ),
          // 1
          // 1
        )
      )
      .subscribe(data => console.log(data))
  }

}
