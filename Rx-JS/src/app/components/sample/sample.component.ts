import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, sample } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit, AfterViewInit {

  @ViewChild('button') button: any;

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    const seconds = interval(1000);
    const clicks = fromEvent(this.button.nativeElement, 'click');
    const result = seconds.pipe(sample(clicks));
    result.subscribe(x => console.log(x));
  }
}
