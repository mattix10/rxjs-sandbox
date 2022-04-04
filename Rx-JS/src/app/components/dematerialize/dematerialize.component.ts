import { Component, OnInit } from '@angular/core';
import { dematerialize, map, ObservableNotification, of, tap } from 'rxjs';

@Component({
  selector: 'app-dematerialize',
  templateUrl: './dematerialize.component.html',
  styleUrls: ['./dematerialize.component.scss']
})
export class DematerializeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let obsNotifications: ObservableNotification<number>[] = [];
    for (let i = 0; i < 5; i ++) {
      obsNotifications.push({
        kind: 'N',
        value: i
      })
    }

    of(...obsNotifications)
      .pipe(
        dematerialize()
      )
      .subscribe((data: any) => console.log(data));
  }

}
