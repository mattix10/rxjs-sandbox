import { Component, OnInit } from '@angular/core';
import { distinctUntilKeyChanged, from } from 'rxjs';

@Component({
  selector: 'app-distinct-until-key-changed',
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrls: ['./distinct-until-key-changed.component.scss']
})
export class DistinctUntilKeyChangedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let employees = [
      {id: 1, name: 'John'},
      {id: 2, name: 'Johny'},
      {id: 2, name: 'Johnny'},
      {id: 3, name: 'John'},
      {id: 2, name: 'Johnyy'},
      {id: 4, name: 'John'},
      {id: 4, name: 'John'},
    ];

    from(employees)
      .pipe(
        distinctUntilKeyChanged('name')
      ).subscribe(data => console.log(data));
  }

}
