import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../shared/workshop.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  // selector: 'workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.css']
})

export class WorkshopListComponent implements OnInit {
  workshops: any;


  constructor(private workshopService: WorkshopService,
    private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.workshops = this.workshopService.getWorkshops()
    //   .subscribe(workshops => this.workshops = workshops);
    this.workshops = this.route.snapshot.data['workshops'];
  }

  handleThumbnailClicked(workshopName) {
    this.toastr.success(workshopName);
  }
}

