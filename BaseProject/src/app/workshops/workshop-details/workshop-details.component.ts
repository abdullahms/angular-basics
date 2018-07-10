import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../shared/workshop.service';
import { ActivatedRoute } from '@angular/router';
import { IWorkshop } from '..';

@Component({
  selector: 'app-workshopdetails',
  templateUrl: './workshop-details.component.html',
  styleUrls: ['./workshop-details.component.css']
})
export class WorkshopDetailsComponent implements OnInit {

  workshop: IWorkshop;
  constructor(private workshopService: WorkshopService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.workshop = this.workshopService.getEvent(
      +this.route.snapshot.params['id']
    );
  }

}
