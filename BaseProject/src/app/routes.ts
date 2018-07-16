import { Routes } from '@angular/router';
import { Error404Component } from './error/error.component';
import { WorkshopRouteActivator } from './Routes/workflow-route-activator.service';
import { UserModule } from './user/user-module';
import { ProfileComponent } from './user/profile/profile-component';
import {
    WorkshopListComponent,
    WorkshopListResolver,
    WorkshopDetailsComponent,
    CreateWorkshopComponent
} from './workshops/index'
import { EditworkshopComponent } from './workshops/editworkshop/editworkshop.component';

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
    { path: 'editworkshop/:id', component: EditworkshopComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/workshops', pathMatch: 'full' },
    { path: 'user', loadChildren: () => UserModule }
]