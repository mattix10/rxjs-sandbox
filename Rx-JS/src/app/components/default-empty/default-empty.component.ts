import { Component, OnInit } from '@angular/core';
import { defaultIfEmpty, of } from 'rxjs';

@Component({
  selector: 'app-default-empty',
  templateUrl: './default-empty.component.html',
  styleUrls: ['./default-empty.component.scss']
})
export class DefaultEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of()
      .pipe(
        defaultIfEmpty(33)
      );
    source$.subscribe(data => console.log(data));

  }

}
