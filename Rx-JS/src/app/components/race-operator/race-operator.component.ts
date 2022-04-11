import { Component, OnInit } from '@angular/core';
import { race, interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-race-operator',
  templateUrl: './race-operator.component.html',
  styleUrls: ['./race-operator.component.scss']
})
export class RaceOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs1 = interval(1000).pipe(mapTo('fast one'));
    const obs2 = interval(3000).pipe(mapTo('medium one'));
    const obs3 = interval(5000).pipe(mapTo('slow one'));
    race(obs3, obs1, obs2)
      .subscribe(winner => console.log(winner))
    }
    // Outputs
    // a series of 'fast one'

}
