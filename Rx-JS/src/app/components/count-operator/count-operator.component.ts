import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { count } from 'rxjs/operators';
@Component({
  selector: 'app-count-operator',
  templateUrl: './count-operator.component.html',
  styleUrls: ['./count-operator.component.scss']
})
export class CountOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // zlicza liczbę nieparzystych liczb od 1 do 7
    const numbers = range(1, 7);
    const result = numbers.pipe(count(i => i % 2 === 1));
    result.subscribe(x => console.log(x));
    // Results in:
    // 4
  }

}
