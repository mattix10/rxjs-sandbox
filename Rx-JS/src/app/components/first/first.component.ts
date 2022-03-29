import { Component, OnInit } from '@angular/core';
import { first, of } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(first())
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err),
        () => console.log('complete')
        );
  }

}
