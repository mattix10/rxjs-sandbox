import { Component, OnInit } from "@angular/core";
import { count, from, map, max, min, reduce, Subject } from "rxjs";

interface Product {
  id: number,
  name: string,
  price: number
}

@Component({
  selector: "app-void-subject",
  templateUrl: "./void-subject.component.html",
  styleUrls: ["./void-subject.component.scss"]
})
export class VoidSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  const products = [
    { id: 1, name: "Shoes", price: 129},
    { id: 2, name: "T-shirt", price: 45},
    { id: 3, name: "Skirt", price: 28},
    { id: 4, name: "Sockets", price: 5},
    { id: 5, name: "Jeans", price: 49}      
  ];
  const products$ = from(products);
  products$
    .pipe(
      count()
    )
    .subscribe((sum: number) => console.log(sum));
  }

}
