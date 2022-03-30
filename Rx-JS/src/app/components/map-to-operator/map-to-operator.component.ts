import { Component, OnInit } from '@angular/core';
import { interval, mapTo } from 'rxjs';

@Component({
  selector: 'app-map-to-operator',
  templateUrl: './map-to-operator.component.html',
  styleUrls: ['./map-to-operator.component.scss']
})
export class MapToOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // interval(500)
    //   .pipe(
    //     mapTo('Hello world')
    //   )
    //   .subscribe(data => console.log(data))
  }

}
