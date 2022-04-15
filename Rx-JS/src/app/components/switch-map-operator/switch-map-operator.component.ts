import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, startWith, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-switch-map-operator',
  templateUrl: './switch-map-operator.component.html',
  styleUrls: ['./switch-map-operator.component.scss']
})
export class SwitchMapOperatorComponent implements OnInit, AfterViewInit {

  @ViewChild('input') input: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const searchText$: Observable<any> = fromEvent<any>(this.input.nativeElement, 'keyup')
      .pipe(
        tap(data => console.log(data)),
        map(event => event.target.value),
        startWith(''),
        debounceTime(400),
        distinctUntilChanged()
      )
    
      searchText$
        .pipe(
          switchMap((id: any) => this.loadPosts(id))
        )
        .subscribe(data => console.log(data))
    
  }

  loadPosts(id: string): Observable<any> {
    return ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

}
