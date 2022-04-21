import { Component, OnInit } from '@angular/core';
import { zip, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let age$ = of(27, 25, 29);
    // let name$ = of('Foo', 'Bar', 'Beer');
    // let isDev$ = of(true, true, false);
    
    // zip(age$, name$, isDev$).pipe(
    //   map(([age, name, isDev]) => ({ age, name, isDev }))
    // )
    // .subscribe(x => console.log(x));
    let age$ = of(27, 25, 29);
    let name$ = of('Foo', 'Bar', 'Beer');
    let isDev$ = of(true, true, false);

    zip([age$, name$, isDev$], (a,b,c) => {
      return a+ ' , ' + b + ' , ' + c
    }).subscribe(data => console.log(data))

 
// Outputs
// { age: 27, name: 'Foo', isDev: true }
// { age: 25, name: 'Bar', isDev: true }
// { age: 29, name: 'Beer', isDev: false }
  }

}
