import { Component, OnInit } from '@angular/core';
import {UserSetting} from "../data/user-setting";

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {
  originalUserSettings: UserSetting = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...'
  };

  userSettings: UserSetting = {...this.originalUserSettings}
  constructor() { }

  ngOnInit(): void {
  }

}
