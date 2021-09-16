import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dummyLevel01 = {
    "Databases": [
      {
        "id": 1,
        "name": "Gen Database 1"
      },
      {
        "id": 2,
        "name": "Gen Database 2"
      },
      {
        "id": 3,
        "name": "Gen Database 3"
      },
      {
        "id": 4,
        "name": "Gen Database 4"
      },
      {
        "id": 5,
        "name": "Gen Database 5"
      }
    ],
    "Files": [
      {
        "id": 1,
        "name": "Gen Database 1"
      },
      {
        "id": 2,
        "name": "Gen Database 2"
      },
      {
        "id": 3,
        "name": "Gen Database 3"
      },
      // {
      //   "id": 4,
      //   "name": "Gen Database 4"
      // },
      // {
      //   "id": 5,
      //   "name": "Gen Database 5"
      // }
    ]
  }


  dummyLevel2 = [
    {
      "id": "11",
      "name": "Schema 1"
    },
    {
      "id": "11",
      "name": "Schema 1"
    }
  ]
  constructor() { }

  ngOnInit(): void {


  }

}
