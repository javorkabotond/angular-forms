import { Component, OnInit } from '@angular/core';
import {UserSetting} from "../data/user-setting";
import {NgForm} from "@angular/forms";

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
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void{
    console.log('in onSubmit: ', form.valid)
  }

}
