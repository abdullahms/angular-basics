import { Routes } from '@angular/router';
import { WorkshopListComponent } from "./workshop-list/workshop-list.component";
import { WorkshopDetailsComponent } from "./workshop-details/workshop-details.component";


export const appRoutes: Routes = [
    { path: 'workshops', component: WorkshopListComponent },
    { path: 'workshops/:id', component: WorkshopDetailsComponent },
    { path: '', redirectTo: '/workshops', pathMatch: 'full' }
]