import { Component, OnInit } from '@angular/core';
import { from, of, partition } from 'rxjs';

@Component({
  selector: 'app-partition-operator',
  templateUrl: './partition-operator.component.html',
  styleUrls: ['./partition-operator.component.scss']
})
export class PartitionOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = of(1,2,3,4,5,6,7,8,9);
    let data = partition(source$, (value: any) => value % 2 == 0);
    data[0].subscribe((data: any) => console.log(data));
    data[1].subscribe((data: any) => console.log(data));
    from(data).subscribe(data => console.log(data));
  }

}
