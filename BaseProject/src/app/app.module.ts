import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {
  WorkshopListComponent,
  WorkshopThumbnailComponent,
  WorkshopDetailsComponent,
  WorkshopService,
  WorkshopListResolver,
  CreateWorkshopComponent
} from './workshops/index';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error/error.component';
import { WorkshopRouteActivator } from './Routes/workflow-route-activator.service';
import { UserModule } from './user/user-module';
import { AuthService } from './user/services/auth-service';


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
    UserModule,
    RouterModule.forRoot(appRoutes),
    //{ enableTracing: true }), // For Debugging Purposes only
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    WorkshopService,
    WorkshopRouteActivator,
    AuthService,
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
