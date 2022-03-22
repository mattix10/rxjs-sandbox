import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { buffer, fromEvent, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-buffer-operator',
  templateUrl: './buffer-operator.component.html',
  styleUrls: ['./buffer-operator.component.scss']
})
export class BufferOperatorComponent implements OnInit, AfterViewInit {

  intervalData: number[] = [];
  showData$!: Observable<Event>;
  constructor() { }

  @ViewChild('button')
  button!: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.showData$ = fromEvent(this.button.nativeElement, 'click');
  }

  startInterval() {
    interval(1000)
      .pipe(buffer(this.showData$))
      .subscribe((data: any) => {
        this.intervalData.push(data);
      })
  }
  

}
