import { Component, OnInit } from '@angular/core';
import { of, skipWhile } from 'rxjs';

@Component({
  selector: 'app-skip-while',
  templateUrl: './skip-while.component.html',
  styleUrls: ['./skip-while.component.scss']
})
export class SkipWhileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1, 2, 3, 4, 5, 1, 2)
      .pipe(skipWhile((x) => x < 3))
      .subscribe(data => console.log(data))
  }

}
