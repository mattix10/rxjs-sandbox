import { Component, OnInit } from '@angular/core';
import { map, materialize, of } from 'rxjs';

@Component({
  selector: 'app-materialize',
  templateUrl: './materialize.component.html',
  styleUrls: ['./materialize.component.scss']
})
export class MaterializeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(1,2,3,4,5);
    source$
    .pipe(
      // map(data => {throw 'error'}),
      materialize()
      )
    .subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('complete')
    })
  }

}
