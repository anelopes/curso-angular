import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';

const URL_API = "http://localhost:3000";

@Injectable({
    providedIn: 'root'
})
export class SignUpService {

    constructor(private http: HttpClient) { }

    checkUserNameTaken(userName: string) {
        return this.http.get(URL_API + '/user/exists/' + userName);
    }

    signUp(newUser: NewUser) {
        return this.http.post(URL_API + '/user/signup', newUser);
    }
}