import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cancelling-observables',
  templateUrl: './cancelling-observables.component.html',
  styleUrls: ['./cancelling-observables.component.scss']
})
export class CancellingObservablesComponent implements OnInit {

  constructor() { }
  timerConsoleSubscription: any;
  timerBrowserSubscription: any;
  timers: number[] = [];

  ngOnInit(): void {
    // const newObservable = new Observable<number>((observer) => {
    //   let i = 0;
    //   let interval = setInterval(() => {
    //     observer.next(i++);
    //   }, 1000);

    //   return () => {
    //     console.log('called when observable is unsubscribed');
    //     clearInterval(interval);
    //   };
    // });

    // this.timerConsoleSubscription = newObservable.subscribe((data) => {
    //   console.log(new Date().toLocaleTimeString() + ' ' + data);
    // })

    // this.timerBrowserSubscription = newObservable.subscribe((data) => {
    //   this.timers.push(data);
    // })
  }

  cancelTimers() {
    this.timerConsoleSubscription.add(this.timerBrowserSubscription);
    this.timerConsoleSubscription.unsubscribe();
  }

}
