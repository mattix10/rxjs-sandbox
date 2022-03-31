import { Component, OnInit } from '@angular/core';
import { concat, Observable, of } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source1$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.complete();
    });
    let source2$ = of('a', 'b', 'c', 'd');

    concat(source1$, source2$).subscribe(data => console.log(data))
  }

}
