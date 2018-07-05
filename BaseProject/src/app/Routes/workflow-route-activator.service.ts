import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { WorkshopService } from "../shared/workshop.service";
import { Injectable } from "@angular/core";

@Injectable()
export class WorkshopRouteActivator implements CanActivate {

    /**
     *
     */
    constructor(private workshopService: WorkshopService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const eventExists = !!this.workshopService.getEvent(route.params['id']);

        if (!eventExists)
            this.router.navigate(['/404']);
        return eventExists;
    }
}