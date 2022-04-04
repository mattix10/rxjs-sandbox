import { Component, OnInit } from '@angular/core';
import { from, mergeMap, of, toArray } from 'rxjs';
import { groupBy, map, reduce, tap } from 'rxjs/operators'
@Component({
  selector: 'app-group-by',
  templateUrl: './group-by.component.html',
  styleUrls: ['./group-by.component.scss']
})
export class GroupByComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let source$ = from([10, 20, 30, 40, 50]);
    // source$
    //   .pipe(
    //     groupBy(val => val > 30),
    //     mergeMap(data => data)
    //   )
    //   .subscribe(data => console.log(data));

      of(
        {id: 1, name: 'Mike', age: 22},
        {id: 2, name: 'John', age: 34},
        {id: 3, name: 'Sarah', age: 22},
        {id: 4, name: 'Jason', age: 31},
        {id: 5, name: 'Joe', age: 22},
        {id: 6, name: 'Samantha', age: 31}
      ).pipe(
        groupBy(p => p.age),
        mergeMap((people) => people.pipe(toArray()))
      )
      .subscribe(people => console.log(people));

      // Output:
      // [
      //   { id: 0, name: 'Mike', age: 22 }
      //   { id: 1, name: 'Sarah', age: 22 }
      //   { id: 5, name: 'Joe', age: 22 }
      // ]
      //
      // [
      //   { id: 2, name: 'John', age: 34 }
      // ]
      //
      // [
      //   { id: 4, name: 'Jason', age: 31 }
      //   { id: 6, name: 'Samantha', age: 31}
      // ]

      // Output:
      // Observable {key: false, _subscribe: ƒ}
      // Observable {key: true, _subscribe: ƒ}

      // Output:
      // [10, 20, 30]
      // [40, 50]
      
    // of(
    //   { id: 1, name: 'JavaScript' },
    //   { id: 2, name: 'Parcel' },
    //   { id: 2, name: 'webpack' },
    //   { id: 1, name: 'TypeScript' },
    //   { id: 3, name: 'TSLint' }
    // )
    //   .pipe(
    //     groupBy(p => p.id, p => p.name),
    //     mergeMap(group$ =>
    //       group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
    //     ),
    //     tap((data) => console.log(data)),
    //     map(arr => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }),
    //     )
    //  )
    //  .subscribe(p => console.log(p));
     
    // displays:
    // { id: 1, values: [ 'JavaScript', 'TypeScript' ] }
    // { id: 2, values: [ 'Parcel', 'webpack' ] }
    // { id: 3, values: [ 'TSLint' ] }

    // of(
    //   {id: 1, name: 'JavaScript'},
    //   {id: 2, name: 'Parcel'},
    //   {id: 2, name: 'webpack'},
    //   {id: 1, name: 'TypeScript'},
    //   {id: 3, name: 'TSLint'}
    // ).pipe(
    //   groupBy(p => p.id),
    //   mergeMap((group$) => group$.pipe(reduce((acc: any, cur: any) => [...acc, cur], [])))
    // )
    // .subscribe(p => console.log(p));
     
    // // displays:
    // // [ { id: 1, name: 'JavaScript'},
    // //   { id: 1, name: 'TypeScript'} ]
    // //
    // // [ { id: 2, name: 'Parcel'},
    // //   { id: 2, name: 'webpack'} ]
    // //
    // // [ { id: 3, name: 'TSLint'} ]
  }

}
