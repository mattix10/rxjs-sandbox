import { Component, OnInit } from '@angular/core';
import { concatMapTo, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-concat-map-to',
  templateUrl: './concat-map-to.component.html',
  styleUrls: ['./concat-map-to.component.scss']
})
export class ConcatMapToComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(concatMapTo(
        ajax(`https://jsonplaceholder.typicode.com/posts/1`).pipe(
          map(data => data.response)
        )
      )
    ).subscribe(data => console.log(data));
  }

}
