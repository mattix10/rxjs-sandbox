import { Component, OnInit } from '@angular/core';
import { audit, interval } from 'rxjs';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000)
      .pipe(audit((val: any): any => {
        // console.log(val)
        return interval(2000)
      }))
      .subscribe(data => console.log(data))
  }

}
