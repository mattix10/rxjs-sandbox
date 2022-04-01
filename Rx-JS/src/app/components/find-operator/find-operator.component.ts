import { Component, OnInit } from '@angular/core';
import { find, of } from 'rxjs';

@Component({
  selector: 'app-find-operator',
  templateUrl: './find-operator.component.html',
  styleUrls: ['./find-operator.component.scss']
})
export class FindOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(1,2,3,4,5);
    source$
      .pipe(
        find((val) => val > 3)
      )
      .subscribe(data => console.log(data))
  }

}
