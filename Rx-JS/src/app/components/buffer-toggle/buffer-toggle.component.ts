import { Component, OnInit } from '@angular/core';
import { bufferToggle, interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-toggle',
  templateUrl: './buffer-toggle.component.html',
  styleUrls: ['./buffer-toggle.component.scss']
})
export class BufferToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let opening = interval(1000)
      // .pipe(tap(() => console.log('open')));
      
    let closing = (data: number) => 
      // interval(3000).pipe(tap(() => console.log('close')));
    
      interval(1000)
        // .pipe(
        //   tap((data) => console.log(data)),
        //   bufferToggle(opening, closing),
        //   take(3)
        // )
        // .subscribe((data) => console.log(data));
  }

}
