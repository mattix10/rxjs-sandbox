import { Component, OnInit } from '@angular/core';
import { mergeMap, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        mergeMap((id) => {
          console.log(id);
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`);
        }, (outerValue, innerValue, outerIndex, innerIndex) => {
          // return innerValue.response;
          // return outerIndex;
          // return outerValue.response
          // return outerIndex
          return innerIndex
        })
      )
      .subscribe(data => console.log(data));
  }

}
