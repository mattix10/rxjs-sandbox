import { Component, OnInit } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.error('error');
    });

    source$
      .pipe(
        retry(2)
      )
      .subscribe(data => console.log(data))
  }

}
