import { Component, OnInit } from '@angular/core';
import { bufferWhen, interval, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-when',
  templateUrl: './buffer-when.component.html',
  styleUrls: ['./buffer-when.component.scss']
})
export class BufferWhenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let x = 0;
    interval(500)
      .pipe(
        tap((i) => (x = i)),
        bufferWhen(() => {
          if (x > 5) {
            return interval(1000);
          }
          return interval(2000);
        })
      )
      .subscribe(data => console.log(data))
  }

}
