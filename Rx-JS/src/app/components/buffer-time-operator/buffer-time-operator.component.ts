import { Component, OnInit } from '@angular/core';
import { bufferTime, interval } from 'rxjs';

@Component({
  selector: 'app-buffer-time-operator',
  templateUrl: './buffer-time-operator.component.html',
  styleUrls: ['./buffer-time-operator.component.scss']
})
export class BufferTimeOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000)
      .pipe(bufferTime(2000, 1000))
      .subscribe(data => console.log(data))
  }

}
