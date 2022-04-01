import { Component, OnInit } from '@angular/core';
import { interval, skipLast, tap } from 'rxjs';

@Component({
  selector: 'app-skip-last',
  templateUrl: './skip-last.component.html',
  styleUrls: ['./skip-last.component.scss']
})
export class SkipLastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(500)
    .pipe(
      tap((data) => {
        console.log(data);
      }),
      skipLast(10)
    )
    .subscribe((data) => console.log(data))
}

}
