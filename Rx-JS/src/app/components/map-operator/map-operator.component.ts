import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent implements OnInit {

  @ViewChild('button') button: any;
  constructor() { }

  ngOnInit(): void {
    of(1, 2, 3, 4)
      .pipe(
        map(value => value * 10)
      )
      .subscribe(data => console.log(data));
  }

  ngAfterViewInit() {
    const mapButtonEvent = fromEvent(this.button.nativeElement, 'click');

    mapButtonEvent
      .pipe(
        map((event: any) => {
            return {
              x: event.clientX,
              y: event.clientY
            }
        }
        )
      )
      .subscribe(data => console.log(data));
  }

}
