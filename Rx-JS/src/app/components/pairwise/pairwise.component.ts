import { Component, OnInit } from '@angular/core';
import { of, pairwise } from 'rxjs';

@Component({
  selector: 'app-pairwise',
  templateUrl: './pairwise.component.html',
  styleUrls: ['./pairwise.component.scss']
})
export class PairwiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(1,2,3,4);
    source$
      .pipe(pairwise())
      .subscribe(data => console.log(data));
  }

}
