import { Component, OnInit } from '@angular/core';
import { timer, of } from 'rxjs';
import { concatMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // This could be any observable
    const source = of(1, 2, 3);
    const result = timer(3000, 1000)
      .pipe(
        concatMapTo(source)
      )
      .subscribe(console.log);
  }

}
