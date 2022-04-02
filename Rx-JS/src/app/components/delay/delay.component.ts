import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss']
})
export class DelayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
    delayedClicks.subscribe(x => console.log(x));
  }

}
