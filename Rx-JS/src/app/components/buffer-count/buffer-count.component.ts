import { Component, OnInit } from '@angular/core';
import { bufferCount, interval } from 'rxjs';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
  styleUrls: ['./buffer-count.component.scss']
})
export class BufferCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // interval(1000)
    //   .pipe(bufferCount(3))
    //   .subscribe((data) => console.log(data));
    // output: [0,1,2] [1,2,3] [2,3,4]

    interval(1000)
      .pipe(bufferCount(3, 2))
      .subscribe((data) => console.log(data));
    // output: [0,1,2] [2,3,4] [4,3,5]
  }

}
