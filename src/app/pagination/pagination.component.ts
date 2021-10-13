import { Component, OnInit } from '@angular/core';
import {image, lorem} from "faker";


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  currentIndex: number = 0;

  data = [
    {
      title: lorem.words(),
      imgUrl: image.image(),
    },
    {
      title: lorem.words(),
      imgUrl: image.imageUrl(),
    },
    {
      title: lorem.words(),
      imgUrl: image.nature(),
    },
    {
      title: lorem.words(),
      imgUrl: image.nightlife(),
    },
    {
      title: lorem.words(),
      imgUrl: image.people(),
    },
    {
      title: lorem.words(),
      imgUrl: image.sports(),
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(e: any) {
    this.currentIndex = +e.target.textContent - 1;
  }

}
