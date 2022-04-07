import { Component, OnInit } from '@angular/core';
import { of, single } from 'rxjs';

@Component({
  selector: 'app-single-operator',
  templateUrl: './single-operator.component.html',
  styleUrls: ['./single-operator.component.scss']
})
export class SingleOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3,4,5)
    .pipe(single((value) => value == 2))
    .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('complete')
    )
  }
}
