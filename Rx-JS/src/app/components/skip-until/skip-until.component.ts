import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable, skipUntil } from 'rxjs';

@Component({
  selector: 'app-skip-until',
  templateUrl: './skip-until.component.html',
  styleUrls: ['./skip-until.component.scss']
})
export class SkipUntilComponent implements OnInit, AfterViewInit {

  buttonEvent!: Observable<Event>;
  constructor() { }

  @ViewChild('button') button: any;

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.buttonEvent = fromEvent(this.button.nativeElement, 'click');

    interval(500)
      .pipe(
        skipUntil(this.buttonEvent)
      )
      .subscribe(data => console.log(data));
  }

}
