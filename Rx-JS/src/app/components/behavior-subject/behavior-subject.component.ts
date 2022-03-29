import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let behaviorSubject$ = new BehaviorSubject(0);
    behaviorSubject$.subscribe(data => console.log('observer1: ', data));
    behaviorSubject$.next(1);
    behaviorSubject$.subscribe(data => console.log('observer2: ', data));
    behaviorSubject$.next(2);
  }

}
