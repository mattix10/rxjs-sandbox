import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.scss']
})
export class TakeOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(500)
      .pipe(take(5))
      .subscribe(
        (data): void => {
          return console.log(data);
        },
        (error) => {
          return console.log(error);
        },
        () => {
          return console.log('complete');
        }
      )
  }

}
