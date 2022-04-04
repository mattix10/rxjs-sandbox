import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { max } from 'rxjs/operators';

@Component({
  selector: 'app-max',
  templateUrl: './max.component.html',
  styleUrls: ['./max.component.scss']
})
export class MaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(5, 4, 7, 2, 8).pipe(
      max(),
    )
    .subscribe(x => console.log(x)); // -> 8
  }

}
