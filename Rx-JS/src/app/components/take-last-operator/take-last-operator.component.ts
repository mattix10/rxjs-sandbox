import { Component, OnInit } from '@angular/core';
import { interval, range, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-take-last-operator',
  templateUrl: './take-last-operator.component.html',
  styleUrls: ['./take-last-operator.component.scss']
})
export class TakeLastOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const many = range(1, 100);
    const lastThree = many.pipe(takeLast(3));
    lastThree.subscribe(x => console.log(x));

    interval(500)
      .pipe(take(10), takeLast(5))
        .subscribe((data) => {
          console.log(data)
        })
  }

}
