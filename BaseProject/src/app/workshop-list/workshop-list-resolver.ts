import { Resolve } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { WorkshopService } from "../shared/workshop.service";
import { Injectable } from "@angular/core";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class WorkshopListResolver implements Resolve<any> {

    constructor(private workshopService: WorkshopService) {
    }

    resolve() {
        return this.workshopService.getWorkshops();
    }
}