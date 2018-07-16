import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkshopService } from '../shared/workshop.service';
import { IWorkshop } from '../shared/workshop.model';

@Component({
  selector: 'app-create-workshop',
  templateUrl: './create-workshop.component.html',
  styleUrls: ['./create-workshop.component.css']
})
export class CreateWorkshopComponent implements OnInit {
  workshop: IWorkshop;
  isDirty: boolean = true;
  constructor(private router: Router, private workshopService: WorkshopService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.workshop = this.workshopService.getEvent(
      +this.route.snapshot.params['id']
    );
  }

  cancel() {
    this.router.navigate(['/workshops']);
  }

  saveEvent(formValues) {
    this.workshopService.saveWorkshop(formValues);
    this.isDirty = false;
    this.router.navigate(['/workshops']);
  }
}
