import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user-route";
import { ProfileComponent } from "./profile/profile-component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [

    ],
    exports: [
        RouterModule
    ]
})
export class UserModule { }