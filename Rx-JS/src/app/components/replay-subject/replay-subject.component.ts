import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let replaySubject$ = new ReplaySubject(4, 4000);
    replaySubject$.next(1);
    replaySubject$.subscribe(data => console.log('observer 1 '+ data));
    replaySubject$.next(2);
    replaySubject$.next(3);
    replaySubject$.next(4);
    setTimeout(() => {
      replaySubject$.subscribe(data => console.log('observer 2 '+ data))
    }, 3000);
  } 

}
