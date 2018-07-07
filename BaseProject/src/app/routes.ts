import { Routes } from '@angular/router';
import { WorkshopListComponent } from "./workshop-list/workshop-list.component";
import { WorkshopDetailsComponent } from "./workshop-details/workshop-details.component";
import { CreateWorkshopComponent } from './create-workshop/create-workshop.component';
import { Error404Component } from './error/error.component';
import { WorkshopRouteActivator } from './Routes/workflow-route-activator.service';
import { WorkshopListResolver } from './workshop-list/workshop-list-resolver';


export const appRoutes: Routes = [
    { path: 'workshop/new', component: CreateWorkshopComponent, canDeactivate: ['canDeactivateCreateWorkshop'] },
    {
        path: 'workshops', component: WorkshopListComponent,
        resolve: { workshops: WorkshopListResolver }
    },
    { path: 'workshops/:id', component: WorkshopDetailsComponent, canActivate: [WorkshopRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/workshops', pathMatch: 'full' }
]