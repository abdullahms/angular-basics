import { Routes } from '@angular/router';
import { Error404Component } from './error/error.component';
import { WorkshopRouteActivator } from './Routes/workflow-route-activator.service';
import { WorkshopListComponent } from './workshops/workshop-list/workshop-list.component';
import { WorkshopListResolver } from './workshops/workshop-list/workshop-list-resolver';
import { WorkshopDetailsComponent } from './workshops/workshop-details/workshop-details.component';
import { CreateWorkshopComponent } from './workshops/create-workshop/create-workshop.component';
import { UserModule } from './user/user-module';
import { ProfileComponent } from './user/profile/profile-component';


export const appRoutes: Routes = [
    {
        path: 'workshop/new', component: CreateWorkshopComponent,
        canDeactivate: ['canDeactivateCreateWorkshop']
    },
    {
        path: 'workshops', component: WorkshopListComponent,
        resolve: { workshops: WorkshopListResolver }
    },
    {
        path: 'workshops/:id', component: WorkshopDetailsComponent,
        canActivate: [WorkshopRouteActivator]
    },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/workshops', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user-module#UserModule' }
]