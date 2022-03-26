import { Component, OnInit } from '@angular/core';
import { filter, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3,4,5, 1, 2, 7)
      .pipe(filter((value) => value > 3))
      .subscribe(data => console.log(data));

      fromEvent(document, 'click')
        .pipe(
          filter((event: Event) => {
            return (event.target as HTMLElement).tagName == 'A';
          })
        )
        .subscribe((data) => {
          console.log(data);
        })
  }

}
