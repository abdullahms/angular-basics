import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { WorkshopListComponent } from './workshop-list/workshop-list.component';
import { WorkshopThumbnailComponent } from './workshop-thumbnail/workshop-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkshopService } from './shared/workshop.service';
import { WorkshopDetailsComponent } from './workshop-details/workshop-details.component';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { CreateWorkshopComponent } from './create-workshop/create-workshop.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error/error.component';
import { WorkshopRouteActivator } from './Routes/workflow-route-activator.service';
import { WorkshopListResolver } from './workshop-list/workshop-list-resolver';


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
