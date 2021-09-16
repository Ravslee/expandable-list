import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expandable-list';

  dummy = {
    "Databases": [
      {
        "Gen Database 1": [
          {
            "Schema 1": [
              {
                "Table 1": [{}],
              },
              {
                "Table 2": [{}],
              },
              {
                "Table 3": [{}]
              }
            ]
          },
          {
            "Schema 2": [
              {
                "Table 1": [{}],
              },
              {
                "Table 2": [{}],
              },
              {
                "Table 3": [{}]
              }
            ]
          },
          {
            "Schema 3": [
              {
                "Table 1": [{}],
              },
              {
                "Table 2": [{}],
              },
              {
                "Table 3": [{}]
              }
            ]
          }
        ]
      },
      {
        "Gen Database 2": [
          {
            "Schema 1": [
              {
                "Table 1": [{}],
              },
              {
                "Table 2": [{}],
              },
              {
                "Table 3": [{}]
              }
            ]
          },
          {
            "Schema 2": [
              {
                "Table 1": [{}],
              },
              {
                "Table 2": [{}],
              },
              {
                "Table 3": [{}]
              }
            ]
          },
          {
            "Schema 3": [
              {
                "Table 1": [{}],
              },
              {
                "Table 2": [{}],
              },
              {
                "Table 3": [{}]
              }
            ]
          }
        ]
      },
      {
        "Gen Database 3": [
          {
            "Schema 1": [
              {
                "Table 1": [{}],
              },
              {
                "Table 2": [{}],
              },
              {
                "Table 3": [{}]
              }
            ]
          },
          {
            "Schema 2": [
              {
                "Table 1": [{}],
              },
              {
                "Table 2": [{}],
              },
              {
                "Table 3": [{}]
              }
            ]
          },
          {
            "Schema 3": [
              {
                "Table 1": [{}],
              },
              {
                "Table 2": [{}],
              },
              {
                "Table 3": [{}]
              }
            ]
          }
        ]
      }
    ]
  }


  dummyLevel01 = {
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
}
