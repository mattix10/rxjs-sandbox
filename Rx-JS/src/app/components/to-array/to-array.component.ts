import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source = of(1,2,3,4,5);
    source.pipe(toArray()).subscribe(data => console.log(data))
    // const source = interval(1000);
    // source.pipe(
    //   take(10),
    //   toArray()
    // ).subscribe(val => console.log(val));
// output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

}
