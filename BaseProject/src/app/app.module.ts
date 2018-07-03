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


@NgModule({
  declarations: [
    AppComponent,
    WorkshopListComponent,
    WorkshopThumbnailComponent,
    NavbarComponent,
    WorkshopDetailsComponent,
    CreateWorkshopComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [WorkshopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
