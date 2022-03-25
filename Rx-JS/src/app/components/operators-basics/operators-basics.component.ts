import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-operators-basics',
  templateUrl: './operators-basics.component.html',
  styleUrls: ['./operators-basics.component.scss']
})
export class OperatorsBasicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const newObservable = new Observable();

    newObservable.subscribe((number: any) => {
      if (number % 2 == 0) {
        console.log('Even Number: ' + number);
      }
    });

    newObservable.pipe(
      filter((number: any) => {
        return number % 2 == 0;
      }),
      map((number) => {
        return 'even number:' + number;
      })
    )
    .subscribe((number) => {
      console.log(number);
    })
  }

}
