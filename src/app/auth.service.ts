import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

interface ResponseModel<MODEL> {
  data: MODEL;
  result: any;
}

interface AuthModel {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  token: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.baseUrl + '/auth';
  }

  logIn(authModel: AuthModel): Observable<ResponseModel<UserModel>> {
    return this.httpClient
      .post<ResponseModel<UserModel>>(this.url + '/logIn', authModel)
      .pipe(tap((res) => console.log(res.data)));
  }

  signUp(authModel: AuthModel): Observable<ResponseModel<UserModel>> {
    return this.httpClient
      .post<ResponseModel<UserModel>>(this.url + '/signUp', authModel)
      .pipe(tap((res) => console.log(res.data)));
  }
}

//krijoni nje interseptor qe i bashkangjit tokenin si auth header ne localstorage
//google sign in
//angularx-social-login
//google oauth
