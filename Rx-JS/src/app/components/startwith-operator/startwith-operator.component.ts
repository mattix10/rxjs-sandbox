import { Component, OnInit } from '@angular/core';
import { interval, startWith } from 'rxjs';

@Component({
  selector: 'app-startwith-operator',
  templateUrl: './startwith-operator.component.html',
  styleUrls: ['./startwith-operator.component.scss']
})
export class StartwithOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = interval(1000);
    source$.pipe(
      startWith(10, 20, 30)
    )
    .subscribe(data => console.log(data))
  }

}
