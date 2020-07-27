import { Component, OnInit } from '@angular/core';
import {UserSetting} from "../data/user-setting";
import {NgForm} from "@angular/forms";
import {DataService} from "../data/data.service";

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {
  originalUserSettings: UserSetting = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings: UserSetting = {...this.originalUserSettings}
  postError: boolean = false;
  postErrorMesagge: string = ''
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onHttpError(errorResponse: any) {
    console.log('Error: ', errorResponse);
    this.postError = true;
    this.postErrorMesagge = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm): void{
    console.log('in onSubmit: ', form.valid);
    if(form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('Success: ', result),
        error => console.log('Error: ', error)
      );
    } else {
      this.postError = true;
      this.postErrorMesagge = "Please fix the above errors!";
    }
  }

}
