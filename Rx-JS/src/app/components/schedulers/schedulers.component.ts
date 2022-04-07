import { Component, OnInit } from '@angular/core';
import { asapScheduler, asyncScheduler, merge, Observable, observeOn, of, queueScheduler } from 'rxjs';

@Component({
  selector: 'app-schedulers',
  templateUrl: './schedulers.component.html',
  styleUrls: ['./schedulers.component.scss']
})
export class SchedulersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('script starting');
    // let queueScheduler$ = of('Queue Scheduler', queueScheduler);
    // let asyncScheduler$ = of('Async Scheduler', asyncScheduler);
    // let asapScheduler$ = of('Asap Scheduler', asapScheduler);
    
    // merge(asyncScheduler$, queueScheduler$, asapScheduler$)
    //   .subscribe(data => console.log(data));
    // console.log('script ending');

    const observable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    }).pipe(
      observeOn(asyncScheduler)
    );
     
    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        console.log('got value ' + x)
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
         console.log('done');
      }
    });
    console.log('just after subscribe');
  }

}
