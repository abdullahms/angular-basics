import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.css']
})
export class WorkshopListComponent implements OnInit {

  workshop = {
    id: 1,
    name: 'Angular Connect',
    date: '9/03/2034',
    time: '10:00 am',
    price: 599.99,
    imageUrl: 'someimage.jpg',
    location:{
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
