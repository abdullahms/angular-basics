import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '../../../../node_modules/@angular/forms';
import { AuthService } from '../services/auth-service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-component.html',
  styleUrls: ['./profile-component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  cancel() {
    this.router.navigate(["workshops"]);
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(["workshops"]);
  }

}
