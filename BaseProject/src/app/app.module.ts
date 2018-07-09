import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error/error.component';
import { WorkshopRouteActivator } from './Routes/workflow-route-activator.service';
import { WorkshopListComponent } from './workshops/workshop-list/workshop-list.component';
import { WorkshopThumbnailComponent } from './workshops/workshop-thumbnail/workshop-thumbnail.component';
import { WorkshopDetailsComponent } from './workshops/workshop-details/workshop-details.component';
import { WorkshopService } from './workshops/shared/workshop.service';
import { WorkshopListResolver } from './workshops/workshop-list/workshop-list-resolver';
import { CreateWorkshopComponent } from './workshops/create-workshop/create-workshop.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkshopListComponent,
    WorkshopThumbnailComponent,
    NavbarComponent,
    WorkshopDetailsComponent,
    CreateWorkshopComponent,
    FooterComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    WorkshopService,
    WorkshopRouteActivator,
    {
      provide: 'canDeactivateCreateWorkshop',
      useValue: checkDirtyState
    },
    WorkshopListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateWorkshopComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');
  return true;
}
