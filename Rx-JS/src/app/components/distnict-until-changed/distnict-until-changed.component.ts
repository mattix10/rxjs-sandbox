import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, from, of } from 'rxjs';

@Component({
  selector: 'app-distnict-until-changed',
  templateUrl: './distnict-until-changed.component.html',
  styleUrls: ['./distnict-until-changed.component.scss']
})
export class DistnictUntilChangedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // of(1, 2, 2, 1, 3, 1, 3)
    //   .pipe(distinctUntilChanged())
    //   .subscribe(data => console.log(data))

    let employees = [
      { id: 1, name: 'Mark'},
      { id: 1, name: 'Mark Twain'},
      { id: 2, name: 'John'},
      { id: 4, name: 'John Doe'}
    ]

    from(employees)
      .pipe(
        distinctUntilChanged(
          (prev, cur) => {
            return prev == cur
          }, (k) => k.id
        )
      ).subscribe(data => console.log(data))
      
    // of(1, 2, 3, 4, 8)
    //   .pipe(
    //     distinctUntilChanged((prev: any, cur: any) => {
    //       return cur == prev + 1;
    //     })
    //   )
    //   .subscribe(data => console.log(data))
    }

}
