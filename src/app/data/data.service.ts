import { Injectable } from '@angular/core';
import {UserSetting} from "./user-setting";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  postUserSettingsForm(userSetting: UserSetting): Observable<any> {

    return this.http.post('https://putsreq.com/JaHrBQqT4cTFekJ06Xjo',userSetting);

    //return of(userSetting);
  }
}
