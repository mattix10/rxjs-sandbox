import { Component, OnInit } from '@angular/core';
import { every, of } from 'rxjs';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.scss']
})
export class EveryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(1,2,3,4,5,7);
    source$
      .pipe(
        every((val) => val < 5)
      )
      .subscribe(data => console.log(data));
  }

}
