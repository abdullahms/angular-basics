import { Component, OnInit } from '@angular/core';
import { IWorkshop } from '../shared/workshop.model';
import { WorkshopService } from '../shared/workshop.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { ToastrService } from '../../../../node_modules/ngx-toastr';
// import { IWorkshop, WorkshopService } from '../workshops';
// import { ActivatedRoute } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-editworkshop',
  templateUrl: './editworkshop.component.html',
  styleUrls: ['./editworkshop.component.css']
})
export class EditworkshopComponent implements OnInit {
  workshop: IWorkshop;
  constructor(private workshopService: WorkshopService, private route: ActivatedRoute,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.workshop = this.workshopService.getEvent(+this.route.snapshot.params['id']);
    // this.toastr.success(this.workshop.date);
  }


  cancel() {
    this.router.navigate(['/workshops']);
  }

  saveEvent(formValues) {
    this.workshopService.saveWorkshop(formValues);
    this.router.navigate(['/workshops']);
  }
}
