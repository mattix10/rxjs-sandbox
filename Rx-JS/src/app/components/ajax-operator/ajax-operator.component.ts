import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs'
@Component({
  selector: 'app-ajax-operator',
  templateUrl: './ajax-operator.component.html',
  styleUrls: ['./ajax-operator.component.scss']
})
export class AjaxOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // ajax(`https://jsonplaceholder.typicode.com/posts`)
    //   .subscribe(data => console.log(data))

    // ajax(`https://jsonplaceholder.typicode.com/posts`)
    //   .pipe(
    //     map(response => response.response)
    //   )
    //   .subscribe(data => console.log(data))

    // ajax
    //   .getJSON(`https://jsonplaceholder.typicode.com/posts`)
    //   .subscribe(data => console.log(data))

    // ajax({
    //   url: `https://jsonplaceholder.typicode.com/posts`,
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //     myheader: 'exampleHeader'
    //   },
    //   body: {
    //     title: 'My example body title'
    //   }
    // }).subscribe(
    //   data => console.log(data)
    // )
    ajax.getJSON('https://dummyjson.com/products/1')
      .subscribe((data: any) => console.log(data));


    ajax({
        url: 'https://dummyjson.com/products/1',
        method: 'DELETE'
      }).pipe(
        map((data: any) => data.response)
      )
      .subscribe((data: any) => console.log(data));
  
  
  }

}
