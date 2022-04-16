import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let observable$ = of(1, 2, 3, 4, 5);
    let subject = new Subject<number>();

    // let observable$ = new Observable<number>(observer => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    // })

    let observer1 = {
      next: (data: number) => console.log('observer 1 ' + data),        
      error: (error: any) => console.log(error),
      complete: () => console.log('complete')
    }

    let observer2 = {
      next: (data: number) => console.log('observer 2 ' + data),        
      error: (error: any) => console.log(error),
      complete: () => console.log('complete')
    }
    // observable$.subscribe(observer1);
    // observable$.subscribe(observer2);

    subject.subscribe(observer1);
    subject.subscribe(observer2);
    observable$.subscribe(subject);

  }

}
