import { Routes } from '@angular/router';
import { WorkshopListComponent } from "./workshop-list/workshop-list.component";
import { WorkshopDetailsComponent } from "./workshop-details/workshop-details.component";
import { CreateWorkshopComponent } from './create-workshop/create-workshop.component';


export const appRoutes: Routes = [
    { path: 'workshop/new', component: CreateWorkshopComponent },
    { path: 'workshops', component: WorkshopListComponent },
    { path: 'workshops/:id', component: WorkshopDetailsComponent },
    { path: '', redirectTo: '/workshops', pathMatch: 'full' }
]