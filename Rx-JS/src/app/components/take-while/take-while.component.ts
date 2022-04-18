import { Component, OnInit } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss']
})
export class TakeWhileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(500)
      .pipe(takeWhile((x) => x < 5))
      .subscribe((data) => console.log(data))
  }

}
