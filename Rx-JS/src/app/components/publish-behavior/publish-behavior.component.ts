import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, connectable, ConnectableObservable, interval, publishBehavior } from 'rxjs';

@Component({
  selector: 'app-publish-behavior',
  templateUrl: './publish-behavior.component.html',
  styleUrls: ['./publish-behavior.component.scss']
})
export class PublishBehaviorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let source$ = interval(1000)
    //   .pipe(publishBehavior(100)) as ConnectableObservable<number>;

    // source$.subscribe(data => console.log('observer 1 '+ data));

    // setTimeout(() => {
    //   source$.subscribe(data => console.log('observer 2' + data));
    // }, 4000);
    let source$ = connectable(interval(1000), {
      connector: () => new BehaviorSubject(100),
    });
    source$.subscribe(data => console.log('observer 1 '+ data));

    setTimeout(() => {
      source$.subscribe(data => console.log('observer 2 ' + data));
    }, 4000);

    source$.connect();
  }

}
