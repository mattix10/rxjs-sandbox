import { Component, OnInit } from '@angular/core';
import { asapScheduler, asyncScheduler, merge, of, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-subscribe-on',
  templateUrl: './subscribe-on.component.html',
  styleUrls: ['./subscribe-on.component.scss']
})
export class SubscribeOnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const a = of(1, 2, 3);
    // const b = of(40, 50, 60);
    // merge(a, b).subscribe(console.log);

    const a = of(1, 2, 3)
    const b = of(40, 50, 60).pipe(subscribeOn(asyncScheduler));;
    merge(a, b).subscribe(console.log);
  }

}
