import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source1$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.complete();
    })
    let source2$ = of('a', 'b');

    forkJoin(source1$, source2$).subscribe(data => console.log(data));
  }

}
