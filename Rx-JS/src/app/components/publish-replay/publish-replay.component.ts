import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, interval, publishReplay, ReplaySubject, share } from 'rxjs';

@Component({
  selector: 'app-publish-replay',
  templateUrl: './publish-replay.component.html',
  styleUrls: ['./publish-replay.component.scss']
})
export class PublishReplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let source$ = interval(1000).pipe(
    //   publishReplay()
    // ) as ConnectableObservable<number>;
    // source$.subscribe(data => console.log('observer1 '+ data));
    // setTimeout(() => {
    //   source$.subscribe(data => console.log('observer 2 '+ data));
    // }, 4000)
    // source$.connect();

    let source$ = interval(1000).pipe(
      share({ connector: () => new ReplaySubject()})
    );
    source$.subscribe(data => console.log('observer1 '+ data));
    setTimeout(() => {
      source$.subscribe(data => console.log('observer 2 '+ data));
    }, 4000)
  }

}
