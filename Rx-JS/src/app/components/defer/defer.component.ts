import { Component, OnInit } from '@angular/core';
import { defer, of } from 'rxjs';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.scss']
})
export class DeferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = defer(() => {
      if (Math.random() > 0.5) {
        return of(1,2,3,4,5);
      } else return of('a','b','c')
    });

    source$.subscribe(data => console.log(data));
    source$.subscribe(data => console.log(data));
  }

}
