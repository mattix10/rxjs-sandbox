import { Component, OnInit } from '@angular/core';
import { ignoreElements, interval, take } from 'rxjs';

@Component({
  selector: 'app-ignore-elements',
  templateUrl: './ignore-elements.component.html',
  styleUrls: ['./ignore-elements.component.scss']
})
export class IgnoreElementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000)
      .pipe(take(5), ignoreElements())
      .subscribe(
        data => console.log(data),
        error => console.log(error),
        () => console.log('complete'))
  }

}
