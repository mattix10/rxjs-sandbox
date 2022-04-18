import { Component, OnInit } from '@angular/core';
import { interval, throttle } from 'rxjs';

@Component({
  selector: 'app-throttle-operator',
  templateUrl: './throttle-operator.component.html',
  styleUrls: ['./throttle-operator.component.scss']
})
export class ThrottleOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000)
      .pipe(
        throttle((value) => interval(2000), { leading: false, trailing: true})
      )
      .subscribe(data => console.log(data))
  }

}
