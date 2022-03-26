import { Component, OnInit } from '@angular/core';
import { distinct, of } from 'rxjs';

@Component({
  selector: 'app-distinct-operator',
  templateUrl: './distinct-operator.component.html',
  styleUrls: ['./distinct-operator.component.scss']
})
export class DistinctOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1, 2, 3, 4, 5, 1, 2, 3, 4)
      .pipe(distinct())
      .subscribe((data) => console.log(data));
    
      // output: 1, 2, 3, 4, 5
    
      of(
        { age: 4, name: 'Foo'},
        { age: 7, name: 'Bar'},
        { age: 5, name: 'Foo'}
      ).pipe(
        distinct((p: any) => p.name)
      )
      .subscribe(x => console.log(x));

    // Outputs
    // { age: 4, name: 'Foo' }
    // { age: 7, name: 'Bar' }
  }

}
