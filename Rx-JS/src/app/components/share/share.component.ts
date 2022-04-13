import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { share, map } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source = interval(1000)
      .pipe(
        map((x: number) => {
            console.log('Processing: ', x);
            return x*x;
        }),
        share()
      );
      source.subscribe(x => console.log('subscription 1: ', x));
      source.subscribe(x => console.log('subscription 1: ', x));
    }

}
