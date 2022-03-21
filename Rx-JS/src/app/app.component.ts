import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, debounceTime, distinctUntilChanged, map, mergeMap, switchMap, interval, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Rx-JS';
  observable1$: any;
  observable2$: any;
  observable3$: any;
  observable4$: any;
  subject: any;
  behaviorSubject: any;

  @ViewChild('input') input: any;
  @ViewChild('input2') input2: any;
  @ViewChild('span') span: any;
  @ViewChild('button') button: any;

  ngAfterViewInit() {
    this.observable1$ = fromEvent(this.input.nativeElement, 'input');
    this.observable2$ = fromEvent(this.input2.nativeElement, 'input');
    this.observable3$ = fromEvent(this.button.nativeElement, 'click');
    this.subject = new Subject();
    this.subject.next('test subject');
    this.behaviorSubject = new BehaviorSubject('test behavior subject');
    this.behaviorSubject.subscribe((value: any) => console.log(value))
    this.subject.subscribe((value: any) => console.log(value));
    this.observable4$ = interval(1000);
    // this.debounceAndDistnct();
    // this.merge();
    this.switchMap();
  }

  debounceAndDistnct(): void {
    this.observable1$
    .pipe(
      map((event: any) => event.target.value),
      debounceTime(2000),
      distinctUntilChanged())
      .subscribe({
        next: function(value: any) {
          console.log(value)
        }
      })
  }

  merge(): void {
    this.observable1$.pipe(
      mergeMap(
        (event1: any) => {
          return this.observable2$.pipe(
            map(
            (event2:any) => event1.target.value + ' ' + event2.target.value
          )
          )
        }
      )
    ).subscribe(
      (combinedValue: any) => {
        this.span.nativeElement.textContent = combinedValue
      }
    )
  }

  switchMap(): void {
    this.observable3$.pipe(
      switchMap(
        event => {
          return this.observable4$
        }
      )).subscribe(
        (value: any) => console.log(value)
      )
  }

}
