import { Component, OnInit } from '@angular/core';
import { last, of } from 'rxjs';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.scss']
})
export class LastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1, 2 ,3, 4)
      .pipe(last(el => el > 5))
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('complete')
      )
  }

}
