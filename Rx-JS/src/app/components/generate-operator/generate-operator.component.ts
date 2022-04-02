import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-generate-operator',
  templateUrl: './generate-operator.component.html',
  styleUrls: ['./generate-operator.component.scss']
})
export class GenerateOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const result = generate(0, x => x <3, x => x +1, x => x* 1000)

     
  //   const result = generate({
  //   initialState: 0,
  //   condition(value) { return value < 3; },
  //   iterate(value) { return value + 1; },
  //   resultSelector(value: number) { return value * 1000; }
  // });
  
  result.subscribe({
    next: value => console.log(value),
    complete: () => console.log('complete!')
  });
  
  // Logs:
  // 0
  // 1000
  // 2000
  // "Complete!"
  }

}
