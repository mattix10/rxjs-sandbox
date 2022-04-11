import { Component, OnInit } from '@angular/core';
import { AsyncSubject, connectable, ConnectableObservable, interval, take } from 'rxjs';

@Component({
  selector: 'app-publish-last',
  templateUrl: './publish-last.component.html',
  styleUrls: ['./publish-last.component.scss']
})
export class PublishLastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // let source$ = interval(1000).pipe(
    //   publishLast()
    // ) as ConnectableObservable<number>;
    // source$.subscribe(data => console.log('observer1 '+ data));
    // setTimeout(() => {
    //   source$.subscribe(data => console.log('observer 2 '+ data));
    // }, 4000)
    // source$.connect();

    let source$ = connectable(interval(1000).pipe(take(5)), {
      connector: () => new AsyncSubject(),
    });
    source$.subscribe(data => console.log('observer1 '+ data));
    setTimeout(() => {
      source$.subscribe(data => console.log('observer 2 '+ data));
    }, 4000)
    source$.connect();
  }

}
