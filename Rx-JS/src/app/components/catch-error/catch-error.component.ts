import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
of(1, 2, 3, 4, 5).pipe(
  map(n => {
     if (n === 4) {
       throw 'four!';
    }
   return n;
  }),
  catchError(err => of('I', 'II', 'III', 'IV', 'V')),
)
.subscribe(x => console.log(x));
  }

}
