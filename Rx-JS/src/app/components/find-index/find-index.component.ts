import { Component, OnInit } from '@angular/core';
import { findIndex, of } from 'rxjs';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.scss']
})
export class FindIndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(12,1,2,3,26,4,5,9);
    source$
      .pipe(
        findIndex((val: number) => val > 20)
      )
      .subscribe((data: any) => console.log(data));
  }

}
