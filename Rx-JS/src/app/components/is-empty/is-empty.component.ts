import { Component, OnInit } from '@angular/core';
import { isEmpty, of } from 'rxjs';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrls: ['./is-empty.component.scss']
})
export class IsEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(1,2,3);
    source$.pipe(
      isEmpty()
    )
    .subscribe(data => console.log(data));
    let source2$ = of();
    source2$.pipe(
      isEmpty()
    )
    .subscribe(data => console.log(data));

  }

}
