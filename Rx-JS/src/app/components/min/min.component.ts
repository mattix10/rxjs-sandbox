import { Component, OnInit } from '@angular/core';
import { min, of, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-min',
  templateUrl: './min.component.html',
  styleUrls: ['./min.component.scss']
})
export class MinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let persons = [
      {name: 'John', age: 24},
      {name: 'Mike', age: 37},
      {name: 'Sarah', age: 29}
    ]

    of(...persons)
      .pipe(min((a, b) => (a.age < b.age ? -1 : 1)))
      .subscribe(data => console.log(data));
  }

}
