import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-cold-observable',
  templateUrl: './cold-observable.component.html',
  styleUrls: ['./cold-observable.component.scss']
})
export class ColdObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let observable$ = new Observable((observer) => {
      observer.next(Math.random());
    });

    observable$.subscribe((value) => {
      console.log('observer 1 ' + value);
    });
    observable$.subscribe((value) => console.log('observer 2 '+ value));

    let documentEvent$ = fromEvent(document, 'click'); // hot

    documentEvent$.subscribe((data: any) => console.log((data as PointerEvent).clientX));
    documentEvent$.subscribe((data: any) => console.log((data as PointerEvent).clientX));

    let interval$ = interval(1000);
    let subject$ = new Subject();
    interval$.subscribe(subject$);

    subject$.subscribe(data => console.log('Observer 1 ' + data));

    setTimeout(() => subject$.subscribe(data => console.log('observer 2 ' + data)), 2000)
  }

}
