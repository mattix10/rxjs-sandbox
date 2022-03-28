import { Component, OnInit } from '@angular/core';
import { elementAt, of } from 'rxjs';

@Component({
  selector: 'app-element-at',
  templateUrl: './element-at.component.html',
  styleUrls: ['./element-at.component.scss']
})
export class ElementAtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(elementAt(3))
      .subscribe(data => console.log(data))
  }

}
